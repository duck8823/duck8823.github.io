const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'data.js'), 'utf8'), context);
const { DATA } = context.window;

test('both languages include only generic contract labels and confirmed technical scope', () => {
  for (const [lang, label] of [['ja', '業務委託'], ['en', 'Contract']]) {
    const cases = DATA[lang].xp.items.filter(item => item.kind === 'contract');
    assert.equal(cases.length, 2);
    assert.ok(cases.every(item => item.org.startsWith(label)));
    assert.ok(cases.some(item => item.tags.includes('Go') && item.tags.includes('AWS')));
    assert.ok(cases.some(item => item.tags.includes('Python') && item.tags.includes('LLM')));
    assert.ok(cases.every(item => item.desc.length >= 50 && item.duration));
  }
});

test('ongoing and project entries have intentional duration labels', () => {
  for (const lang of ['ja', 'en']) {
    for (const item of DATA[lang].xp.items) {
      const duration = item.duration || `~${parseInt(item.to) - parseInt(item.from)}y`;
      assert.doesNotMatch(duration, /NaN|undefined/);
      if (item.kind === 'contract') assert.ok(item.duration);
    }
  }
});

test('both apps use valid local JPEG screenshots with consistent bilingual references', () => {
  assert.equal(DATA.ja.apps.items.length, DATA.en.apps.items.length);
  for (let i = 0; i < DATA.ja.apps.items.length; i++) {
    const app = DATA.ja.apps.items[i];
    assert.match(app.img, /^images\/apps\/.+\.jpg$/);
    assert.equal(app.img, DATA.en.apps.items[i].img);
    const bytes = fs.readFileSync(path.join(root, app.img));
    assert.equal(bytes.subarray(0, 3).toString('hex'), 'ffd8ff');
    assert.ok(bytes.length > 10000 && bytes.length < 5 * 1024 * 1024);
  }
});

test('payment experience is stated for Calorithm without implying payments in Wampo', () => {
  const [wampoJa, calorithmJa] = DATA.ja.apps.items;
  const [wampoEn, calorithmEn] = DATA.en.apps.items;
  assert.match(calorithmJa.desc, /アプリ内課金/);
  assert.match(calorithmEn.desc, /in-app purchases/i);
  assert.doesNotMatch(JSON.stringify(wampoJa), /アプリ内課金|IAP/);
  assert.doesNotMatch(JSON.stringify(wampoEn), /in-app purchases|IAP/i);
});

test('the original four employment records are retained in both languages', () => {
  for (const lang of ['ja', 'en']) {
    const employment = DATA[lang].xp.items.filter(item => item.kind !== 'contract');
    assert.equal(employment.length, 4);
    assert.equal(employment[0].from, '2021');
    assert.equal(employment.at(-1).from, '2013');
  }
});

test('tool summary contains twelve cards without removed skills', () => {
 assert.equal(context.window.SKILLS.length,12);
 assert.ok(context.window.SKILLS.every(s=>!/Python|TypeScript|Protocol/i.test(s.v)));
});

test('employment labels retain useful industry and SET role context', () => {
  assert.equal(DATA.ja.xp.items.find(item => item.from === '2021').org, '新聞社');
  assert.equal(DATA.en.xp.items.find(item => item.from === '2021').org, 'Newspaper publisher');
  const labels = { ja: 'ゲーム・エンターテインメント企業', en: 'Games & entertainment company' };
  for (const lang of ['ja', 'en']) {
    const set = DATA[lang].xp.items.find(item => item.from === '2017');
    assert.equal(set.org, labels[lang]);
    assert.match(set.desc, /SET/);
    assert.match(set.desc, /Software Engineer in Test/);
    assert.doesNotMatch(DATA[lang].about.body, /Internet services company/);
  }
});

test('older employment summaries describe confirmed implementation and delivery work', () => {
  for (const lang of ['ja', 'en']) {
    const employment = DATA[lang].xp.items.filter(item => item.kind !== 'contract');
    assert.ok(employment.every(item => item.desc.length >= (lang === 'ja' ? 90 : 200)));
    const web = employment.find(item => item.from === '2013');
    for (const tool of ['Java', 'Spring Boot', 'GitLab', 'JUnit', 'Selenium', 'Jenkins', 'Docker']) {
      assert.ok(web.desc.includes(tool), `Missing confirmed web-development scope: ${tool}`);
    }
    const set = employment.find(item => item.from === '2017');
    assert.match(set.desc, /SDK/);
    assert.match(set.desc, /OSS/);
    const healthcare = employment.find(item => item.from === '2018');
    assert.match(healthcare.desc, /Kotlin/);
    assert.match(healthcare.desc, /AWS/);
  }
});

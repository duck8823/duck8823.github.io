# v1.18+ nutrition remote asset packs

This directory contains static JSON files for the v1.18.0 remote nutrition asset rollout (extended in v1.19 with the convenience-store pack).

## Pack boundary policy

User-facing packs are grouped by understandable food domains, not by a single brand or import source.

- `ja_basic_v1` / 基本食品データ
  - Basic/common Japanese foods, generic dishes, bento/sides, and MEXT-derived items.
  - Does **not** include chain-specific official menu entries.
- `ja_fast_food_v1` / 外食・ファストフード
  - Fast-food / eating-out menu entries.
  - McDonald's Japan official nutrition facts are the first source segment in this pack.
  - Do not expose a McDonald's-specific pack as a separate user download unit.
- `ja_convenience_v1` / コンビニ・市販品
  - Convenience-store style hot snacks, chilled meals, sandwiches, sides, sweets, and drinks.
  - Generic curated estimates; do **not** import live brand SKUs or scrape vendor sites.
  - Names use `コンビニ...` / `市販...` prefixes so the resolver does not accidentally hit
    user input that was meant for `ja_basic_v1` (e.g. plain `おにぎり`, `サラダチキン`).

Internal source/provenance is tracked with `source`, `license`, and per-entry `citation`; it is not the same thing as the user-facing pack boundary.

## Pack metadata

| Pack id | User-facing group | Version | Entries | Aliases | Size | SHA-256 | Source bucket |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| `ja_basic_v1` | 基本食品データ | 3 | 354 | 526 | 339668 | `d413a01512c10f6f44435cbd7a99983ca6ffc7355cc81defceb416bbcc265bf3` | `curated_generic_mext2023_v1.18` |
| `ja_fast_food_v1` | 外食・ファストフード | 1 | 61 | 40 | 58837 | `e8a19a6b2d26badf70f76ce118a6492566391d1c6c83c4f1952748061d681eb7` | `fast_food_mcdonalds_jp_official_v1.18` |
| `ja_convenience_v1` | コンビニ・市販品 | 1 | 32 | 32 | 24427 | `ea3e8084ee46064766aca8a6993a6e669cca9a431f760bf301a1d7e3e916efdd` | `internal_curated_convenience_v1.19` |

Total remote entries: 447. Total aliases: 598. Entry schema: `curated-nutrition-v2`.

## Source attribution

The `license` field is used as a provenance bucket for runtime observability; it is not a legal SPDX license identifier. Keep source URLs and attribution here for release audit.

- Curated generic estimates: internal portion estimates for common Japanese meals.
- MEXT Standard Tables of Food Composition in Japan 2023: https://www.mext.go.jp/a_menu/syokuhinseibun/mext_00001.html (per-100 g entries; source is cited on each imported entry).
- McDonald's Japan nutrition facts: https://www.mcdonalds.co.jp/quality/allergy_Nutrition/nutrient/ (per-serving entries; accessed 2026-05-05 and cited on each imported entry).
- Internal curated convenience-store estimates: portion + macro estimates for typical Japanese convenience-store hot snacks, chilled meals, breads, sweets, and drinks. No live brand SKUs or scraped vendor data.

## Remote Config rollout values

- OFF / rollback all: `nutrition_pack_enabled=false`
- Rollback one pack: remove that id from `nutrition_pack_enabled_ids`
- ON candidate: `nutrition_pack_enabled=true`
- `nutrition_pack_manifest_url=https://calorie-balance-1b683.web.app/nutrition/manifest.json?v=4`
- `nutrition_pack_enabled_ids=ja_basic_v1,ja_fast_food_v1,ja_convenience_v1`
- `nutrition_pack_cache_ttl_seconds=3600`
- `nutrition_pack_max_total_bytes=5242880`

Do not send pack entry ids, names, aliases, URLs, or checksums to analytics. Loader telemetry must remain bucketed only.

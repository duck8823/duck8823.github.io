# Repository maintenance

This repository publishes the static sites served from `duck8823.github.io`.

## Hygiene rules

- Do not commit OS metadata such as `.DS_Store`, `Thumbs.db`, or `Desktop.ini`.
- Keep deployable static assets that are intentionally served by GitHub Pages under version control.
- Run the repository hygiene check before opening cleanup/deploy PRs:

```bash
bash scripts/check-repo-hygiene.sh
```

## Notable paths

- `/` — portfolio top page
- `/calorithm/` — Calorithm landing/support/privacy pages
- `/wampo/` — Wampo landing/support/privacy pages
- `/wannya/` — Wannya landing/support/privacy pages

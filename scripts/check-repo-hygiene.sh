#!/usr/bin/env bash
set -euo pipefail

fail() {
  echo "ERROR: $*" >&2
  exit 1
}

if ! git rev-parse --show-toplevel >/dev/null 2>&1; then
  fail "run this script inside a git repository"
fi

tracked_junk="$({
  git ls-files | grep -E '(^|/)(\.DS_Store|Thumbs\.db|Desktop\.ini|ehthumbs\.db)$|(^|/)__MACOSX(/|$)|(^|/)\._' || true
})"

if [[ -n "$tracked_junk" ]]; then
  echo "Tracked OS/editor metadata must be removed:" >&2
  echo "$tracked_junk" >&2
  exit 1
fi

working_tree_junk="$({
  find . \
    -path './.git' -prune -o \
    -name '.DS_Store' -print -o \
    -name 'Thumbs.db' -print -o \
    -name 'Desktop.ini' -print -o \
    -name 'ehthumbs.db' -print -o \
    -name '__MACOSX' -print -o \
    -name '._*' -print || true
})"

if [[ -n "$working_tree_junk" ]]; then
  echo "Local OS/editor metadata found; remove these files before committing:" >&2
  echo "$working_tree_junk" >&2
  exit 1
fi

echo "OK: repository hygiene check passed"

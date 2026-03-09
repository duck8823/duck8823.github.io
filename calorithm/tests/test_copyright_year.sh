#!/bin/bash
# Test: Verify copyright year in all HTML footers
# Usage: bash web/tests/test_copyright_year.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WEB_DIR="$(dirname "$SCRIPT_DIR")"
EXPECTED_YEAR="2026"
FAILED=0

for file in "$WEB_DIR"/*.html; do
  filename="$(basename "$file")"
  if grep -q "&copy; ${EXPECTED_YEAR} Shunsuke Maeda" "$file"; then
    echo "PASS: $filename contains © ${EXPECTED_YEAR}"
  else
    echo "FAIL: $filename does not contain © ${EXPECTED_YEAR}"
    FAILED=1
  fi
done

if [ "$FAILED" -eq 0 ]; then
  echo ""
  echo "All tests passed."
  exit 0
else
  echo ""
  echo "Some tests failed."
  exit 1
fi

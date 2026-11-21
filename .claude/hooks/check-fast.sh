#!/usr/bin/env bash
# Stop hook: Claude cannot end its turn while `npm run check:fast` fails.
set -u
input=$(cat)
cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0

if output=$(npm run --silent check:fast 2>&1); then
  exit 0
fi

# Second failure in a row: let Claude stop, but warn the user, to avoid an endless loop.
if printf '%s' "$input" | grep -q '"stop_hook_active": *true'; then
  echo '{"systemMessage": "npm run check:fast still fails: the code is not in a clean state."}'
  exit 0
fi

printf 'npm run check:fast failed. Fix it before finishing:\n%s\n' "$(printf '%s' "$output" | tail -40)" >&2
exit 2

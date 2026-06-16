#!/usr/bin/env bash
# Dev-server wrapper: ensures the locally-installed Node is on PATH before
# launching Next, so child processes that resolve `node` via env succeed.
set -e
export PATH="$HOME/.local/node/bin:$PATH"
cd "$(dirname "$0")/.."
exec npm run dev -- -p 3100

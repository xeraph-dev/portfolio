#!/usr/bin/env bash

set -euo pipefail

./build.sh

rsync -avzP --delete ./dist/ vps:/var/www/xeraph.dev/

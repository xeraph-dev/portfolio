#!/usr/bin/env bash

./build.sh

rsync -avzP --delete ./dist/ vps:/var/www/xeraph.dev/

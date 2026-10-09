#!/usr/bin/env bash

rsync -avzP --delete ./dist/ vps:/var/www/xeraph.dev/

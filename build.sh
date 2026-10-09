#!/usr/bin/env bash

set -euo pipefail

go run .

cd out
latexmk -pdf
cd ..

rm -rf dist
mkdir dist

for lang in en es; do
    mkdir dist/$lang
    cp out/index-$lang.html dist/$lang/index.html
    cp out/cv-$lang.pdf dist/$lang/cv.pdf
done

cp main.css dist/styles.css

inkscape logo-small.svg --export-text-to-path --export-plain-svg -o out/logo-small.svg
inkscape logo.svg --export-text-to-path --export-plain-svg -o out/logo.svg

magick -background none -density 288 out/logo-small.svg \
    -define icon:auto-resize=48,32,16 dist/favicon.ico
magick -background none -density 216 out/logo.svg \
    -resize 1200x630 \
    -background '#0e1117' -gravity center -extent 1200x630 \
    -strip dist/og.png

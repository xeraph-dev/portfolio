#!/usr/bin/env bash

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

magick convert logo.svg -resize 1200x630x100% -gravity center -background transparent dist/og.png
magick convert logo-small.svg -resize 32x32 -background transparent dist/favicon.ico

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
cp favicon.ico dist/favicon.ico

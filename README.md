# Portfolio & CV

My personal portfolio website and CV, generated from a single Go file.
One data source produces a static site (HTML) and a PDF resume (LaTeX), in English and Spanish.

Live at [www.xeraph.dev](https://www.xeraph.dev).

## How it works

All content (experience, projects, skills, etc.) lives in `main.go`. Running it renders two templates per language:

| Template         | Output                | Result            |
| ---------------- | --------------------- | ----------------- |
| `main.html.tmpl` | `out/index-<lang>.html` | Portfolio page    |
| `main.tex.tmpl`  | `out/cv-<lang>.tex`     | CV, compiled to PDF |

`build.sh` then compiles the PDFs, assembles everything into `dist/` and generates the favicon and Open Graph image from the SVG logos.

## Requirements

- [Go](https://go.dev/)
- A LaTeX distribution with `latexmk` (TeX Live / MacTeX)
- [ImageMagick](https://imagemagick.org/) (`magick`)
- [Inkscape](https://inkscape.org) (`inkscape`)
- `rsync` (only for deploying)
- JetBrains Mono Font (used by the logo SVGs)

## Usage

Generate the HTML and TeX files only:

```sh
go run .
```

Full build (HTML + PDF + assets) into `dist/`:

```sh
./build.sh
```

Preview locally with nginx (adjust the paths in `nginx.conf` to your machine), then open <http://localhost:8080>:

```sh
nginx -c "$(pwd)/nginx.conf"
```

Deploy to the server:

```sh
./deploy.sh
```

## Project structure

```
main.go            Content and generator
main.html.tmpl     HTML template
main.tex.tmpl      LaTeX template
main.css           Site styles
logo.svg           Source for the Open Graph image
logo-small.svg     Source for the favicon
build.sh           Build script
deploy.sh          Deploy script (rsync)
nginx.conf         Local preview server
dist/              Build output (git-ignored)
out/               Intermediate files (git-ignored)
```

## Editing content

1. Update the `Data` entries in `main.go` (one per language).
2. Run `./build.sh`.
3. Check `dist/en/` and `dist/es/`.

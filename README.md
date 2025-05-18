# 🕯️ Meridian

A sleek and minimal theme for [Obsidian](https://obsidian.md).

![Meridian Theme Screenshot](./docs/cover.png)

The font shown in the screenshot is [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible), but the theme uses whatever font and font size you've set in your Obsidian settings. I also use a CSS snippet to make the headers use the [Lora](https://fonts.google.com/specimen/Lora) font.

## Features

> [!NOTE]
> Transparency is not supported on Windows.

- Hides clutter and distractions.
  - No unnecessary icons in the sidebars—I do most things with keyboard shortcuts or the command palette.
  - Dynamically hides the tab bar when only one tab is open.
  - Grayscale file properties unless hovered.
  - Other small tweaks to reduce clutter.
- Optional CSS rules you can apply on a note-by-note basis with the `cssclasses` file property.
  - `image-invert` - Inverts images.
  - `image-grayscale` - Grayscales images.
  - `image-sepia` - Sepias images.
  - `image-blur-[sm|md|lg]` - Blurs images unless hovered.
  - `image-hover-scale-[xs|sm|md|lg|xl]` - Scales images on hover.
  - `text-[left|center|right|justify]` - Aligns text.
  - `text-[uppercase|lowercase|capitalize]` - Changes text case.
  - `font-monospace` - Makes text use your monospace font.
  - `font-[thin|light|regular|medium|bold|black]` - Makes text a specific weight.
  - I recommend creating a [note](https://github.com/mvahaste/meridian/blob/main/CSS%20Class%20Suggestions.md?plain=1) with all the CSS classses applied so you get suggestions for them.
- Supports both light and dark modes.
- Uses your Obsidian font settings, no annoying font overrides.

### Snippets

These are optional CSS snippets you can use to customize your Obsidian further:

- [header-font-lora.css](https://github.com/mvahaste/meridian/blob/main/header-font-lora.css) - Use the Lora font for headers.
- [minimal-image-captions.css](https://github.com/mvahaste/meridian/blob/main/minimal-image-captions.css) - Use a minimal style for image captions (requires the [Image Captions](https://github.com/alangrainger/obsidian-image-captions) plugin).

## Issues & Feature Requests

If you've encountered any issues or have any feature requests feel free to [create an issue](https://github.com/mvahaste/meridian/issues/new/choose) or [open a pull request](https://github.com/mvahaste/meridian/compare).

## Development Guide

1. Fork or clone this repository.
2. Create a `.env` file in the root directory of the repository with `.env.example` as a template.
3. Run `npm install` to install all dependencies
4. Run `npm start` to compile the theme into your Obsidian themes directory and watch for changes.

## Acknowledgements

- Forked from the [Apex](https://github.com/clearlysid/apex) theme.

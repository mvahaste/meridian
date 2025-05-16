# 🌅 Meridian

A sleek and minimal theme for [Obsidian](https://obsidian.md).

![Meridian Theme Screenshot](./docs/cover.png)

The font shown in the screenshot is [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible), but the theme uses whatever font and font size you've set in your Obsidian settings. I also use a CSS snippet to make the headers use the [Lora](https://fonts.google.com/specimen/Lora) font.

## Features

- Hides clutter and distractions.
  - No unnecessary icons in the sidebars—I do most things with keyboard shortcuts or the command palette.
  - Dynamically hides the tab bar when only one tab is open.
  - Grayscale file properties unless hovered.
  - Other small tweaks to reduce clutter.
- Optional CSS snippets you can apply on a note-by-note basis with the `cssclasses` file property.
  - `images-invert` - Inverts images.
  - `images-grayscale` - Grayscales images.
  - `images-sepia` - Sepias images.
  - `images-blur-[sm|md|lg]` - Blurs images unless hovered.
  - `images-hover-scale-[xs|sm|md|lg|xl]` - Scales images on hover.
  - `text-[left|center|right|justify]` - Aligns text.
  - `text-monospace` - Makes text monospace (uses the monospace font set in your Obsidian settings).
- Supports both light and dark modes.
- Uses your Obsidian font settings, no annoying font overrides.

### Optional

These are optional CSS snippets you can use to customize your Obsidian further:

- [header-font-lora.css](https://github.com/mvahaste/meridian/blob/master/header-font-lora.css) - Use the Lora font for headers.
- [minimal-image-captions.css](https://github.com/mvahaste/meridian/blob/master/minimal-image-captions.css) - Use a minimal style for image captions (requires the [Image Captions](https://github.com/alangrainger/obsidian-image-captions) plugin).

## Issues & Feature Requests

If you've encountered any issues or have any feature requests feel free to [create an issue](https://github.com/mvahaste/meridian/issues/new/choose) or [open a pull request](https://github.com/mvahaste/meridian/compare).

## Development Guide

1. Fork or clone this repository.
2. Create a `.env` file in the root directory of the repository with `.env.example` as a template.
3. Run `npm install` to install all dependencies
4. Run `npm start` to compile the theme into your Obsidian themes directory and watch for changes.

## Acknowledgements

- Forked from the [Apex](https://github.com/clearlysid/apex) theme.

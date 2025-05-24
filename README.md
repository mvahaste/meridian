# 🕯️ Meridian

A sleek and minimal theme for [Obsidian](https://obsidian.md).

![Meridian Theme Screenshot](./docs/cover.png)

## Features

> [!IMPORTANT]
> This theme is designed with macOS in mind, it might not work elsewhere.

- Translucent background, including the editor.
- Hides clutter and distractions, configurable via the [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) plugin.
  - No unnecessary icons in the sidebars—I do most things with keyboard shortcuts or the command palette.
  - Dynamically hides the tab bar when only one tab is open.
  - Hide or de-emphasize various UI elements unless hovered/focused.
  - Other small tweaks to reduce clutter.
- Optional CSS rules you can apply on a note-by-note basis with the `cssclasses` file property.
  - `image-invert` - Inverts images.
  - `image-grayscale` - Grayscales images.
  - `image-sepia` - Sepias images.
  - `image-blur-[sm|md|lg]` - Blurs images unless hovered.
  - `image-hover-scale-[xs|sm|md|lg|xl]` - Scales images on hover.
  - `image-[left|center|right]` - Aligns images.
  - `text-[left|center|right|justify]` - Aligns text.
  - `text-[uppercase|lowercase|capitalize]` - Changes text case.
  - `font-monospace` - Makes text use your monospace font.
  - `font-[thin|light|regular|medium|bold|black]` - Makes text a specific weight.
  - I recommend creating a [note](https://github.com/mvahaste/meridian/blob/main/CSS%20Class%20Suggestions.md?plain=1) with all the CSS classses applied so you get suggestions for them.
- Supports both light and dark modes (way better in dark mode though).
- Uses your Obsidian font settings, no annoying overrides.

## Issues & Feature Requests

If you find a bug or want to request a feature feel free to open an issue or submit a pull request.

I'm mainly developing this theme for myself but I'll try to address any issues or requests to the best of my ability.

## Development Guide

1. Fork or clone this repository.
2. Create a `.env` file in the root directory of the repository with `.env.example` as a template.
3. Run `npm install` to install all dependencies
4. Run `npm start` to compile the theme into your Obsidian themes directory and watch for changes.

## Acknowledgements

- Forked from the [Apex](https://github.com/clearlysid/apex) theme.

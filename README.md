# 🕯️ Meridian

A sleek and minimal theme for [Obsidian](https://obsidian.md).

![Meridian Theme Screenshot](./docs/cover.png)

# 📑 Table of Contents

- [🚀 Quickstart](#-quickstart)
  - [📦 Community Themes](#-community-themes)
  - [🛠️ Manual Installation](#%EF%B8%8F-manual-installation)
- [✨ Features](#-features)
  - [🧼 Minimal & Uncluttered UI](#-minimal--uncluttered-ui)
  - [📚 Per-Note Visual Customization](#-per-note-visual-customization)
  - [⚙️ Configurable Settings](#%EF%B8%8F-configurable-settings)
- [🐛 Issues & Feature Requests](#-issues--feature-requests)
- [🛠 Development Guide](#-development-guide)
- [❤️ Acknowledgements](#%EF%B8%8F-acknowledgements)
- [📄 License](#-license)

## 🚀 Quickstart

### 📦 Community Themes

1. Go to **Settings → Appearance → Themes → Manage**.
2. Search for **Meridian** in the community themes list.
3. Select **Install and use**.
4. (Optional) Install the **Style Settings** plugin to access customization options.

### 🛠️ Manual Installation

Clone this repository into your `.obsidian/themes` directory, or:

1. Download the `theme.css` and `manifest.json` files from the [latest release](https://github.com/mvahaste/meridian/releases/latest).
2. Place them into a new folder named `Meridian` inside your `.obsidian/themes` directory.
3. Enable the theme in **Settings → Appearance → Themes** (you might need to restart Obsidian).
4. (Optional) Install the **Style Settings** plugin to access customization options.

## ✨ Features

> [!IMPORTANT]
> This is a macOS-focused theme.  
> It should also work on Windows (blur not supported), but support for other platforms is not guaranteed.

### 🧼 Minimal & Uncluttered UI

Hides visual noise and distractions across the interface.

- Sidebar toggle buttons, nav headers, tab headers, and other UI chrome are hidden unless hovered or focused.
- Tab bar dynamically hides when only a single tab is open.
- Status bar, backlinks, and file metadata are grayed and semi-transparent until hovered or focused.
- Optional always-hidden mode for the tab bar.
- Sidebar headers (tags, backlinks, outline, etc.) and graph controls are only visible on hover.
- Scrollbars, tooltips, flair, and instruction text are removed or minimized where possible.
- Improves spacing between headers and paragraphs for cleaner readability.

### 📚 Per-Note Visual Customization

Use the `cssclasses` frontmatter property to apply scoped styles per note.

- Invert, grayscale, sepia, or blur images—with effects removed on hover.
- Align images or text left, right, center, or justify.
- Scale images smoothly on hover.
- Transform text to uppercase, lowercase, or capitalized.
- Switch text to monospace or apply specific font weights (thin to black).

💡 _Tip: Create a [note](https://github.com/mvahaste/meridian/blob/main/CSS%20Class%20Suggestions.md) with all available styles applied to enable suggestions._

### ⚙️ Configurable Settings

Tailor the theme's appearance and behavior through various toggles and sliders via the Style Settings plugin.

- **Background Opacity** — Adjust the transparency of the background mask (0–1).
- **Minimal Image Captions** — Toggle a cleaner, low-profile style for image captions (requires the [Image Captions](https://github.com/alangrainger/obsidian-image-captions) plugin).
- **Show Header Levels** — Choose to always display header levels or only on hover in preview mode.
- **Show Header Hashtags** — Optionally show `#` before headers in preview mode.
- **Hide Header Link Underline** — Remove underlines from linked headers for a sleeker look.
- **Hide Tab Bar** — Choose between dynamically hiding the tab bar, always hiding it, or never hiding it.
- **De-emphasize UI Elements** — Soften visual prominence of the status bar, file properties, and embedded backlinks in preview mode.

## 🐛 Issues & Feature Requests

Meridian is a personal project, but I welcome contributions and feedback. I'll do my best to address issues and feature requests as time allows.

## 🛠 Development Guide

1. Fork or clone this repository.
2. Create a `.env` file in the root directory of the repository with `.env.example` as a template.
3. Run `npm install` to install all dependencies
4. Run `npm start` to compile the theme into your Obsidian themes directory and watch for changes.

## ❤️ Acknowledgements

- Forked from the [Apex](https://github.com/clearlysid/apex) theme.
- Configurable via the [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) plugin.

## 📄 License

This theme is distributed under the [MIT License](LICENSE).

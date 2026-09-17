# iField × Getly — Support Widget

A lightweight, drop-in "Support iField" button for any web page. Nature × Technology × Creativity.

[Live store on Getly](https://getly.store/store/ifield-mu3m318a) · [Getly Page](https://ifield.getly.page)

## What this is

A small floating widget (pill + expandable panel) that links visitors straight to the iField store on Getly. No frameworks, no build step — just three files.

- **`index.html`** — demo page, shows the widget in action
- **`widget.css`** — dark, nature-themed styling
- **`widget.js`** — widget logic, self-contained
- **`config.js`** — edit this to change the text/link, no coding needed

## Install on your own page

Copy `widget.css`, `widget.js` and `config.js` next to your HTML file, then add this right before `</body>`:

```html
<link rel="stylesheet" href="widget.css">
<script src="config.js"></script>
<script src="widget.js"></script>
```

## Customize

Open `config.js` and edit the values:

```js
window.IFIELD_WIDGET_CONFIG = {
  storeName: "iField",
  tagline: "Nature × Technology",
  message: "Original 4K nature footage, photography and ambient sound.",
  buyLabel: "View on Getly",
  storeUrl: "https://getly.store/store/ifield-mu3m318a",
  emoji: "🌿"
};
```

## Upgrading to the official Getly Pay Widget

Once Getly approves the [Pay Widget](https://getly.store/pay-widget) for this store, its embed snippet can replace the plain link in `widget.js` (see the `buyHref` comment inside the file) so purchases happen in a native checkout instead of opening Getly in a new tab.

## License

MIT — see [LICENSE](LICENSE).

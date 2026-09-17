/**
 * iField × Getly — Support Widget
 * Drop-in floating "Support iField" button that links to a Getly product/store.
 *
 * Usage — add before </body>:
 *   <link rel="stylesheet" href="widget.css">
 *   <script src="config.js"></script>
 *   <script src="widget.js"></script>
 *
 * Configure the target link and copy in config.js (window.IFIELD_WIDGET_CONFIG).
 *
 * NOTE: This is a lightweight custom widget that links out to Getly.
 * Once Getly's official Pay Widget is approved for this store, its embed
 * script can be dropped into the "buy" button below instead of a plain link
 * — see the comment near ifwBuyHref.
 */
(function () {
  var cfg = window.IFIELD_WIDGET_CONFIG || {};

  var storeName   = cfg.storeName   || "iField";
  var tagline     = cfg.tagline     || "Nature × Technology";
  var message     = cfg.message     || "Original 4K nature footage, photography and ambient sound.";
  var buyLabel    = cfg.buyLabel    || "View on Getly";
  var buyHref     = cfg.storeUrl    || "https://getly.store/store/ifield-mu3m318a";
  var accentEmoji = cfg.emoji       || "🌿";

  var root = document.createElement("div");
  root.className = "ifw-root";
  root.innerHTML =
    '<div class="ifw-pill" id="ifwToggle">' +
      '<span class="ifw-pill-dot"></span>' +
      '<span>Support ' + storeName + '</span>' +
    '</div>' +
    '<div class="ifw-panel" id="ifwPanel">' +
      '<button class="ifw-close" id="ifwClose" aria-label="Close">✕</button>' +
      '<div class="ifw-panel-header">' +
        '<span class="ifw-logo-mark">' + accentEmoji + '</span>' +
        '<div>' +
          '<div class="ifw-panel-title">' + storeName + '</div>' +
          '<div class="ifw-panel-sub">' + tagline + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="ifw-panel-body">' + message + '</div>' +
      '<a class="ifw-buy-btn" id="ifwBuyLink" href="' + buyHref + '" target="_blank" rel="noopener">' +
        buyLabel +
      '</a>' +
      '<div class="ifw-footer">' +
        '<span>via Getly</span>' +
        '<a href="https://getly.store" target="_blank" rel="noopener">getly.store</a>' +
      '</div>' +
    '</div>';

  document.addEventListener("DOMContentLoaded", function () {
    document.body.appendChild(root);

    var toggle = document.getElementById("ifwToggle");
    var panel  = document.getElementById("ifwPanel");
    var close  = document.getElementById("ifwClose");

    toggle.addEventListener("click", function () {
      panel.classList.toggle("ifw-open");
    });
    close.addEventListener("click", function (e) {
      e.stopPropagation();
      panel.classList.remove("ifw-open");
    });
    document.addEventListener("click", function (e) {
      if (!root.contains(e.target)) panel.classList.remove("ifw-open");
    });
  });

  // If document already parsed (script loaded late), run init immediately.
  if (document.readyState !== "loading") {
    document.body.appendChild(root);
  }
})();

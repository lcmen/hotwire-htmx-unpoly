# Hotwire vs HTMX vs Unpoly

Simple TODO application built with Rails to compare Hotwire, HTMX and Unpoly.

All variants share the same controller. Difference lies in views and JavaScript files.

## HTMX

It uses `head-support` extension to merge heads and `preload` to preload links on mousedown.

Modal is powered by native `dialog` element with small sprinkle of JavaScript via Alpine.js component.

Redirects are made with `HX-Location` header.

## Hotwire

Scroll is preserved through `before-visit` and `load` event handlers.

Modal is powered by native `dialog` element with small sprinkle of JavaScript via Stimulus controller.

Redirects are made with custom stream action.

## Unpoly

No extra code, just configuration for default animations.

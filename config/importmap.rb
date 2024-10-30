# Pin npm packages by running ./bin/importmap

pin "hotwire-app"
pin "htmx-app"
pin "unpoly-app"

pin "alpinejs"
pin "htmx"
pin "htmx.org"
pin "htmx-ext-head-support"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/assets/javascript/components", under: "components"
pin_all_from "app/assets/javascript/controllers", under: "controllers"
pin "htmx-ext-preload" # @2.0.1

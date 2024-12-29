# Pin npm packages by running ./bin/importmap

pin "hotwire-app"
pin "htmx-app"
pin "inertia-app"
pin "unpoly-app"
pin "utils"

pin_all_from "app/assets/javascript/components", under: "components"
pin_all_from "app/assets/javascript/controllers", under: "controllers"
pin_all_from "app/assets/javascript/screens", under: "screens"
pin_all_from "app/views", under: "views", to: ""

pin "alpinejs"
pin "htmx"
pin "htmx.org"
pin "htmx-ext-head-support"
pin "htmx-ext-preload"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"

# From skypack
pin "lodash.isequal" # @4.5.0
pin "qs" # 6.13.1
pin "react", to: "https://cdn.skypack.dev/react@19.0.0"
pin "react-dom", to: "https://cdn.skypack.dev/react-dom@19.0.0"
pin "@inertiajs/react", to: "https://cdn.skypack.dev/@inertiajs/react"
pin "@inertiajs/core", to: "https://cdn.skypack.dev/@inertiajs/core"
pin "axios", to: "https://cdn.skypack.dev/axios@1.7.9"
pin "deepmerge", to: "https://cdn.skypack.dev/deepmerge@4.3.1"
pin "htm", to: "https://cdn.skypack.dev/htm@3.1.1"

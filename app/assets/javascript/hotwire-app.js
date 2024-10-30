import { Application } from "@hotwired/stimulus"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import "@hotwired/turbo-rails"

(function preserveScroll(document) {
  let scrollPosition = 0;

  function preserveScroll (event) {
    scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  }

  function restoreScroll (event) {
    document.documentElement.scrollTop = document.body.scrollTop = scrollPosition;
  }

  document.addEventListener("turbo:before-fetch-request", preserveScroll)
  document.addEventListener("turbo:load", restoreScroll)
}(document))

const application = Application.start()
application.debug = false

eagerLoadControllersFrom("controllers", application)

window.Stimulus = application

Turbo.StreamActions.redirect = function () {
  Turbo.visit(this.target, { shouldCacheSnapshot: false })
}

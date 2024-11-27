import { Application } from "@hotwired/stimulus"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import "@hotwired/turbo-rails"

const application = Application.start()
application.debug = false

eagerLoadControllersFrom("controllers", application)

window.scrollPosition = 0;
window.Stimulus = application

Turbo.StreamActions.redirect = function () {
  Turbo.visit(this.target)
}

document.addEventListener("turbo:before-visit", () => {
  if (document.body.dataset.preserveScroll === undefined) return

  scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
})

document.addEventListener("turbo:load", () => {
  if (document.body.dataset.preserveScroll === undefined) return

  document.documentElement.scrollTop = document.body.scrollTop = scrollPosition
})

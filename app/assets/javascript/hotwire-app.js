import { Application } from "@hotwired/stimulus"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import "@hotwired/turbo-rails"

const application = Application.start()
application.debug = false

eagerLoadControllersFrom("controllers", application)

window.Stimulus = application

Turbo.StreamActions.redirect = function () {
  Turbo.visit(this.target, { shouldCacheSnapshot: false })
}

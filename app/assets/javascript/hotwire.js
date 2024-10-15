// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails import "@hotwired/turbo-rails"
import { Application } from "@hotwired/stimulus"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import "@hotwired/turbo-rails"

const application = Application.start()
application.debug = false

eagerLoadControllersFrom("controllers", application)

window.Stimulus = application

Turbo.StreamActions.redirect = function () {
  Turbo.visit(this.target)
};

import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    open: Boolean
  }

  connect() {
    if (this.openValue) this.open()
  }

  disconnect() {
    document.removeEventListener("turbo:before-cache", this.boundBeforeCache)
  }

  backdropClose(event) {
    if (event.target.nodeName == "DIALOG") this.close()
  }

  open() {
    this.element.showModal()
  }

  close() {
    this.element.close()
  }
}

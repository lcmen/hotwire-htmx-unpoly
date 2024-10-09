import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    open: Boolean
  }

  connect() {
    if (this.openValue) this.open()
    this.boundBeforeRender = this.beforeRender.bind(this)
    document.addEventListener("turbo:before-render", this.boundBeforeRender)
  }

  disconnect() {
    document.removeEventListener("turbo:before-render", this.boundBeforeRender)
  }

  backdropClose(event) {
    if (event.target.nodeName == "DIALOG") this.close()
  }

  beforeRender(event) {
    event.preventDefault()

    this.close().then(() => event.detail.resume())
  }

  open() {
    this.element.showModal()
  }

  close(event) {
    if (event && event.detail && typeof event.detail === 'object' && !event.detail.success) return
    if (event) event.preventDefault()

    this.element.setAttribute("closing", "")

    return Promise.all(
      this.element.getAnimations().map((animation) => animation.finished),
    ).then(() => {
      this.element.removeAttribute("closing")
      this.element.close()
    })
  }
}

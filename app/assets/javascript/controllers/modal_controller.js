import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    open: Boolean
  }

  connect() {
    if (this.openValue) this.open()
    this.boundBeforeCache = this.beforeCache.bind(this)
    this.boundBeforeRender = this.beforeRender.bind(this)

    // document.addEventListener("turbo:before-cache", this.boundBeforeCache)
    // document.addEventListener("turbo:before-render", this.boundBeforeRender)
  }

  disconnect() {
    // document.removeEventListener("turbo:before-cache", this.boundBeforeCache)
    // document.removeEventListener("turbo:before-render", this.boundBeforeRender)
  }

  backdropClose(event) {
    if (event.target.nodeName == "DIALOG") this.close()
  }

  beforeCache() {
    this.close()
  }

  beforeRender(event) {
    if (this.openValue) this.close(event).then(() => event.detail.resume())
  }

  submit(event) {
    event.detail.formSubmission.stop();
    event.preventDefault();
    return this.close()
  }

  open() {
    this.openValue = true
    this.element.showModal()
  }

  close(event) {
    // Don't follow the link if the modal is closing by clicking the cancel button
    if (event) event.preventDefault()

    this.element.setAttribute("closing", "")

    return Promise.all(
      this.element.getAnimations().map((animation) => animation.finished),
    ).then(() => {
      this.element.removeAttribute("closing")
      this.openValue = false
      this.element.close()
    })
  }
}

import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["close"]
  static values = {
    open: Boolean
  }

  connect() {
    if (this.openValue) this.open()
  }

  backdropClose(event) {
    if (event.target.nodeName == "DIALOG") {
      this.closeTarget ? this.closeTarget.click() : this.close()
    }
  }

  closeWithAnimation(event) {
    if (this.openValue) this.close(event).then(() => event.detail.resume())
  }

  open() {
    this.openValue = true
    this.element.showModal()
  }

  close(event) {
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

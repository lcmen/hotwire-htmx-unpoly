import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { open: Boolean }

  backdropClose(event) {
    if (event.target.nodeName == "DIALOG") this.close()
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

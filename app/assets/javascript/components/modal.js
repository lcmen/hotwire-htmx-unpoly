export default function Modal() {
  return {
    show() {
      this.$el.showModal();
    },
    close() {
      this.$el.setAttribute("closing", "")

      Promise.all(
        this.$el.getAnimations().map((animation) => animation.finished),
      ).then(() => {
        this.$el.removeAttribute("closing")
        this.$el.close()
      })
    },
    closeIfSuccessful(event) {
      if (event.detail.xhr.status < 400) this.close();
    },
  };
}

export default function Modal() {
  return {
    open: false,
    init() {
      this.$watch('open', value => {
        value ? this.show() : this.close();
      })
    },
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
    }
  };
}

document.addEventListener('DOMContentLoaded', function() {
  up.form.config.submitSelectors.push(['form'])
  up.layer.config.modal.openAnimation = 'fade-in'
  up.layer.config.modal.closeAnimation = 'fade-out'
  up.layer.config.modal.openDuration = 500
  up.layer.config.modal.closeDuration = 500
  up.link.config.followSelectors.push('a[href]')
});

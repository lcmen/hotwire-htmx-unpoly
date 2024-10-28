document.addEventListener('DOMContentLoaded', function() {
  up.layer.config.modal.openAnimation = 'fade-in'
  up.layer.config.modal.closeAnimation = 'fade-out'
  up.layer.config.modal.openDuration = 500
  up.layer.config.modal.closeDuration = 500

  up.on('up:layer:dismiss', (event) => {
    console.log('up:layer:dismiss', event);
  });

  up.on('up:layer:accept', (event) => {
    console.log('up:layer:accept', event);
  });
});

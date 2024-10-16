import alpine from 'alpinejs';
import htmx from 'htmx.org';
import modal from 'components/modal';

Alpine.data('modal', modal)
Alpine.start()

window.Alpine = alpine
window.htmx = htmx

document.body.addEventListener('htmx:beforeSwap', function(evt) {
  // Allow 422 responses to swap as they are form validation errors
  if (evt.detail.xhr.status === 422) {
    evt.detail.shouldSwap = true
    evt.detail.isError = false
  }
})

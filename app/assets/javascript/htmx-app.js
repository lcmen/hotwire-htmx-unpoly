import Alpine from 'alpinejs';
import modal from 'components/modal';
import 'htmx';
import 'htmx-ext-head-support';
import 'htmx-ext-preload';

Alpine.data('modal', modal)
Alpine.start()

window.Alpine = Alpine

document.body.addEventListener('htmx:beforeSwap', function(evt) {
  // Allow 422 responses to swap as they are form validation errors
  if (evt.detail.xhr.status === 422) {
    evt.detail.shouldSwap = true
    evt.detail.isError = false
  }
})

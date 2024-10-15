import htmx from 'htmx.org';
import alpine from 'alpinejs';
import modal from 'components/modal';

window.Alpine = alpine;
window.htmx = htmx;

Alpine.data('modal', modal);
Alpine.start();

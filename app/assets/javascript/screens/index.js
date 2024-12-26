import { html } from 'utils'
import { usePage } from '@inertiajs/react'
import { Fragment, createElement } from 'react'

import TasksIndex from 'views/tasks/index.inertia';
import TasksNew from 'views/tasks/new.inertia';
import TasksEdit from 'views/tasks/edit.inertia';

const screens = {
  'tasks/index': TasksIndex,
  'tasks/new': TasksNew,
  'tasks/edit': TasksEdit,
}

const Modal = ({ component, props }) => {
  const screen = screens[component]

  return html`
    <dialog
      id="modal"
      aria-modal="true"
      class="modal"
      open="true"
      role="dialog"
    >
      ${createElement(screen, props)}
    </dialog>
  `
}

const Layout = ({ children }) => {
  const { flash, modal } = usePage().props

  return html`
    <${Fragment}>
      ${flash.notice && html`<div class="flash">${flash.notice}</div>`}

      <div class="container mx-auto mt-28 px-5 flex">
        ${children}
      </div>

      ${modal && html`<${Modal} component=${modal.component} props=${modal.props} />`}
    <//>
  `
}

export default screens;

export { Layout }

import { html } from 'utils'
import { usePage } from '@inertiajs/react'
import { Fragment } from 'react'

import TasksIndex from 'views/tasks/index.inertia';
import TasksNew from 'views/tasks/new.inertia';
import TasksEdit from 'views/tasks/edit.inertia';

const Layout = ({ children }) => {
  const { flash } = usePage().props

  return html`
    <Fragment>
      ${flash.notice && html`
        <div class="flash">
          ${flash.notice}
        </div>
      `}
      <div class="container mx-auto mt-28 px-5 flex">
        ${children}
      </div>
    </Fragment>
  `
}

const screens = {
  'tasks/index': TasksIndex,
  'tasks/new': TasksNew,
  'tasks/edit': TasksEdit,
}

export default screens;

export { Layout }

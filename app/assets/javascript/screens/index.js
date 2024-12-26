import { html } from 'utils'
import { usePage } from '@inertiajs/react'
import { Fragment, createElement, useEffect, useRef, useState } from 'react'

import TasksIndex from 'views/tasks/index.inertia';
import TasksNew from 'views/tasks/new.inertia';
import TasksEdit from 'views/tasks/edit.inertia';

const screens = {
  'tasks/index': TasksIndex,
  'tasks/new': TasksNew,
  'tasks/edit': TasksEdit,
}

const Modal = ({ component, props }) => {
  const [closing, setClosing] = useState(false)
  const [open, setOpen] = useState(false)
  const [screen, setScreen] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    if (component) {
      setOpen(true)
      setScreen(createElement(screens[component], props))
    } else if (open && !closing) {
      setClosing(true)
    } else if (open && closing) {
      Promise.all(ref.current.getAnimations().map(animation => animation.finished)).then(() => {
        setScreen(null)
        setOpen(false)
        setClosing(false)
      })
    }
  }, [component, closing, open, setClosing, setOpen, setScreen])

  return html`
    <dialog
      id="modal"
      class="modal"
      open=${open}
      closing=${closing ? 'true' : null}
      ref=${ref}
    >
      ${screen ? screen : null}
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

      <${Modal} component=${modal?.component} props=${modal?.props} />
    <//>
  `
}

export default screens;

export { Layout }

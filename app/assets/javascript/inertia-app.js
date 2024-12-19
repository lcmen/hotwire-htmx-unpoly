import screens, { Layout } from 'screens';

import { createInertiaApp } from '@inertiajs/react'
import { createElement } from 'react'
import ReactDOM from 'react-dom'

createInertiaApp({
  resolve: (name) => {
    const page = screens[name]
    page.layout = (page) => createElement(Layout, null, page)
    return page
  },
  setup({ el, App, props }) {
    ReactDOM.render(createElement(App, props), el)
  },
})

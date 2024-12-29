import { html } from 'utils'
import { Link, useForm } from '@inertiajs/react'

const TaskForm = ({ task }) => {
  const { data, errors, setData, patch, post, processing } = useForm({
    title: task.title,
    description: task.description,
  })

  const submitForm = (e) => {
    e.preventDefault()

    if (task.id) {
      patch(`/inertia/tasks/${task.id}`)
    } else {
      post('/inertia/tasks')
    }
  }

  return html`
    <form onSubmit=${submitForm}>
      ${Object.keys(errors).length > 0 && html`
        <div class="bg-red-50 text-red-500 px-3 py-2 font-medium rounded-lg mt-3">
          <h2>${Object.keys(errors).length} error(s) prohibited this task from being saved:</h2>
          <ul>
            ${Object.keys(errors).map(key => html`<li>${errors[key]}</li>`)}
          </ul>
        </div>
      `}

      <div class="my-5">
        <label for="task_title">Title</label>
        <input
          id="task_title"
          type="text"
          name="task[title]"
          value=${data.title}
          class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange=${(e) => setData('title', e.target.value)}
        />
      </div>

      <div class="my-5">
        <label for="task_description">Description</label>
        <input
          id="task_description"
          type="text"
          name="task[description]"
          value=${data.description}
          class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange=${(e) => setData('description', e.target.value)}
        />
      </div>

      <button type="submit" class="button green mr-2" disabled=${processing}>Save</button>
      <${Link} href="/inertia/tasks" class="button gray" preserveScroll>Cancel<//>
    </form>
  `
}

export default TaskForm

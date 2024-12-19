import { html } from 'utils'
import { Link, router } from '@inertiajs/react'

const TasksIndex = ({ tasks }) => {
  const deleteTask = (task) => (e) => {
    e.preventDefault()

    if (window.confirm('Are you sure?')) router.delete(`/inertia/tasks/${task.id}`, { preserveScroll: true })
  }

  const toggleTaskCompletion = (task) => (e) => {
    e.preventDefault()

    if (task.done) {
      router.delete(`/inertia/tasks/${task.id}/completion`, { preserveScroll: true })
    } else {
      router.post(`/inertia/tasks/${task.id}/completion`, {}, { preserveScroll: true })
    }
  }

  return html`
    <div class="w-full">
      <div class="mb-3 flex justify-between items-center">
        <h1 class="font-bold text-4xl">Tasks</h1>
        <${Link} href="/inertia/tasks/new" class="button green">New task<//>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th class="w-1/12">Status</th>
            <th class="w-4/12">Title</th>
            <th class="w-6/12">Description</th>
            <th class="w-1/12">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${tasks.map((task) => html`
            <tr>
              <td>
                <div class="flex items-center">
                  ${task.done ? (
                    html`
                      <button class="toggle selected" onClick=${toggleTaskCompletion(task)}>
                        ✓
                      </button>
                    `
                  ) : (
                    html`
                      <button class="toggle not-selected" onClick=${toggleTaskCompletion(task)}>

                      </button>
                    `
                  )}
                </div>
              </td>
              <td>${task.title}</td>
              <td>${task.description}</td>
              <td>
                <${Link} href="/inertia/tasks/${task.id}/edit" class="mr-3 button blue">Edit<//>
                <button class="button red" onClick=${deleteTask(task)}>Destroy</button>
              </td>
            </tr>
          `)}
        </tbody>
      </table>
    </div>
  `
}

export default TasksIndex

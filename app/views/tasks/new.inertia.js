import { html } from 'utils'
import TaskForm from 'views/tasks/_form.inertia';

const TasksNew = ({ task }) => {
  return html`
    <div data-mode="modal">
      <h1 class="font-bold text-4xl">New task</h1>
      <${TaskForm} task=${task} />
    </div>
  `
}

export default TasksNew

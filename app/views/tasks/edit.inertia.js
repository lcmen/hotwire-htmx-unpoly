import { html } from 'utils'
import TaskForm from 'views/tasks/_form.inertia';

const TasksEdit = ({ task }) => {
  return html`
    <div>
      <h1 class="font-bold text-4xl">Edit task</h1>
      <${TaskForm} task=${task} />
    </div>
  `
}

export default TasksEdit

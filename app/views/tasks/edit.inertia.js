import { html } from 'utils'
import TaskForm from 'views/tasks/_form.inertia';

const TasksEdit = ({ task }) => {
  return html`
    <div class="mx-auto md:w-2/3 w-full">
      <div>
        <h1 class="font-bold text-4xl">Edit task</h1>
        <${TaskForm} task=${task} />
      </div>
    </div>
  `
}

export default TasksEdit

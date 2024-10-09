module TasksHelper
  def task_submit_path(task, **kwargs)
    if task.persisted?
      task_path(task, **kwargs)
    else
      tasks_path(**kwargs)
    end
  end
end

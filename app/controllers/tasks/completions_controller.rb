module Tasks
  class CompletionsController < ApplicationController
    def create
      task = Task.find(params[:task_id])
      task.complete!
      redirect_to tasks_path
    end

    def destroy
      task = Task.find(params[:task_id])
      task.uncomplete!
      redirect_to tasks_path
    end
  end
end

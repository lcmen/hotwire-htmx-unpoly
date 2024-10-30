class TasksController < ApplicationController
  def index
    @tasks = Task.all
    fresh_when @tasks
  end

  def new
    @task = Task.new
    fresh_when @task
  end

  def edit
    @task = Task.find(params.expect(:id))
    fresh_when @task
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      redirect_to tasks_path, notice: "Task was successfully created.", status: :see_other
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    @task = Task.find(params.expect(:id))
    if @task.update(task_params)
      redirect_to tasks_path, notice: "Task was successfully updated.", status: :see_other
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @task = Task.find(params.expect(:id))
    @task.destroy!
    redirect_to tasks_path, notice: "Task was successfully destroyed.", status: :see_other
  end

  private

  def task_params
    params.expect(task: [ :title, :description, :done ])
  end
end

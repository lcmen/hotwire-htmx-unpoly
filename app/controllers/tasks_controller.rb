class TasksController < ApplicationController
  def index
    @tasks = Task.all
    render :index
  end

  def show
    @task = Task.find(params.expect(:id))
    render :show
  end

  def new
    @task = Task.new
    render :new
  end

  def edit
    @task = Task.find(params.expect(:id))
    render :edit
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      redirect_to @task, notice: "Task was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    @task = Task.find(params.expect(:id))
    if @task.update(task_params)
      redirect_to @task, notice: "Task was successfully updated.", status: :see_other
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

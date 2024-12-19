class TasksController < ApplicationController
  def index
    @tasks = Task.all
    respond_to do |format|
      format.html do |variant|
        variant.any { fresh_when @tasks }
        variant.inertia { render inertia: "tasks/index", props: { tasks: @tasks } }
      end
    end
  end

  def new
    @task = Task.new
    respond_to do |format|
      format.html do |variant|
        variant.any { fresh_when @task }
        variant.inertia { render inertia: "tasks/new", props: { task: @task } }
      end
    end
  end

  def edit
    @task = Task.find(params.expect(:id))
    respond_to do |format|
      format.html do |variant|
        variant.any { fresh_when @task }
        variant.inertia { render inertia: "tasks/edit", props: { task: @task } }
      end
    end
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

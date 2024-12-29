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
        variant.inertia { inertia_modal("tasks/new", props: { task: @task }, background: :index) }
      end
    end
  end

  def edit
    @task = Task.find(params.expect(:id))
    respond_to do |format|
      format.html do |variant|
        variant.any { fresh_when @task }
        variant.inertia { inertia_modal("tasks/edit", props: { task: @task }, background: :index) }
      end
    end
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      redirect_to tasks_path, notice: "Task was successfully created.", status: :see_other
    else
      respond_to do |format|
        format.html do |variant|
          variant.any { render :new, status: :unprocessable_entity }
          variant.inertia { raw_redirect_to(new_task_url(variant: :inertia), inertia: { errors: @task.errors.full_messages }) }
        end
      end
    end
  end

  def update
    @task = Task.find(params.expect(:id))
    if @task.update(task_params)
      redirect_to tasks_path, notice: "Task was successfully updated.", status: :see_other
    else
      respond_to do |format|
        format.html do |variant|
          variant.any { render :edit, status: :unprocessable_entity }
          variant.inertia { raw_redirect_to(edit_task_url(variant: :inertia), inertia: { errors: @task.errors.full_messages }) }
        end
      end
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

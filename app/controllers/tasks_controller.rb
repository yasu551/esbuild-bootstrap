class TasksController < ApplicationController
  before_action :set_task, only: %i[show update]

  def index
    @task = Task.new
    @tasks = Task.default_order
  end

  def show
  end

  def create
    @task = Task.new(task_params)
    unless @task.save
      @tasks = Task.default_order
      render :index, status: :unprocessable_entity
    end
  end

  def update
    @task.update_next_state!
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(%i[name description])
  end
end

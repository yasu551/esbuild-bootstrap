class TasksController < ApplicationController
  before_action :set_task, only: %i[update]

  def index
    @task = Task.new
    @tasks = Task.default_order
  end

  def create
    @task = Task.new(task_params)
    unless @task.save
      render :index
    end
  end

  def update
    unless @task.update_next_state
      render :index
    end
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:name)
  end
end

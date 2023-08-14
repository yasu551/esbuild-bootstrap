class TasksController < ApplicationController
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

  private

  def task_params
    params.require(:task).permit(:name)
  end
end

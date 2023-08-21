module TaskHelper
  def task_state_class(task:)
    "is-#{task.state}"
  end
end

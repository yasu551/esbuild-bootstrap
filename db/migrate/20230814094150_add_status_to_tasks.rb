class AddStatusToTasks < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :state, :string, null: false, default: 'todo'
  end
end

class AddProfileToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :profile, :text, null: false, default: ''
  end
end

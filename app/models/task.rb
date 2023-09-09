class Task < ApplicationRecord
  extend Enumerize

  enumerize :state, in: %i[todo progress done]

  validates :name, presence: true

  scope :default_order, -> { order(id: :desc) }

  def update_to_next_state!
    update!(state: next_state)
  end

  private

  def next_state
    if state.todo?
      'progress'
    elsif state.progress?
      'done'
    elsif state.done?
      'todo'
    end
  end
end

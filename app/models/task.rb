class Task < ApplicationRecord
  validates :name, presence: true

  scope :default_order, -> { order(id: :desc) }
end

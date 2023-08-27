class User < ApplicationRecord
  validates :name, presence: true
  validates :annual_income, numericality: { only_integer: true, greater_than_or_equal_to: 0, allow_blank: true }
  validates :phone_number, phone: { allow_blank: true }

  scope :default_order, -> { order(id: :desc) }
end

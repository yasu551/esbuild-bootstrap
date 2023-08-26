class User < ApplicationRecord
  validates :name, presence: true
  validates :annual_income, numericality: { only_integer: true, greater_than_or_equal_to: 0, allow_blank: true }
end

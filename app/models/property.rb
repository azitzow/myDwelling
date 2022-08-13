class Property < ApplicationRecord
  has_many :preventative_maintenances
  has_many :inspections, through: :user

  # has_one :project
  belongs_to :user

end

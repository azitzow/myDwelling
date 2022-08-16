class Property < ApplicationRecord
  belongs_to :user

  has_many :propertyMaintenances
  has_many :maintenances, through: :propertyMaintenances
end

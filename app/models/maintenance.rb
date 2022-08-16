class Maintenance < ApplicationRecord
  has_many :propertyMaintenances
  has_many :properties, through: :propertyMaintenances
end

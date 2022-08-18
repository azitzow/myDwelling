class Maintenance < ApplicationRecord
  has_many :property_maintenances
  has_many :properties, through: :property_maintenances
end

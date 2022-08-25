class Property < ApplicationRecord
  belongs_to :user

  has_many :property_maintenances, dependent: :destroy
  has_many :maintenances, through: :property_maintenances
end

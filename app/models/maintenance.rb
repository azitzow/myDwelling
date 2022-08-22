class Maintenance < ApplicationRecord
  has_many :property_maintenances, dependent: :destroy
  has_many :properties, through: :property_maintenances

  belongs_to :user, optional: true;
  belongs_to :category
end

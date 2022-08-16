class MaintenanceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category

  has_many :properties
  has_many :propertyMaintenances, through: :properties
end

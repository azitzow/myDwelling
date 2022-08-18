class MaintenanceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category
end

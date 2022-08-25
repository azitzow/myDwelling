class MaintenancesWithoutPropertyIdSerializer < ActiveModel::Serializer
  attributes :id, :name, :category_id, :estimated_cost
end

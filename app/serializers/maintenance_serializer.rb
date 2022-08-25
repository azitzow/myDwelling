class MaintenanceSerializer < ActiveModel::Serializer
  attributes :id, :name, :completed, :date_completed, :category_id, :estimated_cost

end

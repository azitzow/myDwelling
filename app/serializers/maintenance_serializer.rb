class MaintenanceSerializer < ActiveModel::Serializer
  attributes :id, :name, :category_id, :estimated_cost, :completed

  def completed
    PropertyMaintenance.find_by(property_id: instance_options[:property_id], maintenance_id: object.id).completed
  end
end

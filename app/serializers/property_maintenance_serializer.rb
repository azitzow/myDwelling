class PropertyMaintenanceSerializer < ActiveModel::Serializer
  attributes :id, :maintenance
  has_one :property
end

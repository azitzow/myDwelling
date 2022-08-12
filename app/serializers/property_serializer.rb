class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :belongs_to
end

class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image
  # has_one :user
end

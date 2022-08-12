class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :phone_number
end

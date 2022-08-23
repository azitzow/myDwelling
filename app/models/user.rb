class User < ApplicationRecord
  has_many :properties
  has_many :maintenances

  validates :username, uniqueness: true, presence: true
  validates :email, uniqueness: true, presence: true
  # validates :phone_number, format: { with: /\(?[0-9]{3}\)?-[0-9]{3}-[0-9]{4}/, message: 'Phone numbers must be in xxx-xxx-xxxx format'}

  has_secure_password
end

class Category < ActiveRecord::Base
  has_many :maintenances
end
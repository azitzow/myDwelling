class Property < ApplicationRecord
  has_many :preventatice_maintances
  has_many :inspections, through: :user

  has_one :checklist
  belongs_to :user

end

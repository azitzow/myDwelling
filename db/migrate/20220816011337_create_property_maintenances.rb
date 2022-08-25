class CreatePropertyMaintenances < ActiveRecord::Migration[6.1]
  def change
    create_table :property_maintenances do |t|
      t.boolean :completed, default: false
      t.date :date_completed
      t.belongs_to :maintenance, null: false, foreign_key: true
      t.belongs_to :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end

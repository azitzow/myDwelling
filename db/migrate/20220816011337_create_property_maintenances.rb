class CreatePropertyMaintenances < ActiveRecord::Migration[6.1]
  def change
    create_table :property_maintenances do |t|
      t.belongs_to :maintenance, null: false, foreign_key: true
      t.belongs_to :property, null: false, foreign_key: true
      t.boolean :completed
      t.date :date
      t.decimal :cost

      t.timestamps
    end
  end
end

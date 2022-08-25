class CreateMaintenances < ActiveRecord::Migration[6.1]
  def change
    create_table :maintenances do |t|
      t.text :name
      t.boolean :completed
      t.date :date_completed
      t.integer :user_id
      t.integer :category_id
      t.integer :estimated_cost

      t.timestamps
    end
  end
end

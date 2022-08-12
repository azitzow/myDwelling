class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :address
      t.user :belongs_to

      t.timestamps
    end
  end
end

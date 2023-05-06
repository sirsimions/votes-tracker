class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.integer :mobno
      t.string :role
      t.string :password_digest

      t.timestamps
    end
  end
end

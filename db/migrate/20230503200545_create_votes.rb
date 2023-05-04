class CreateVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :votes do |t|
      t.string :county
      t.string :pollingStation
      t.integer :votes

      t.timestamps
    end
  end
end

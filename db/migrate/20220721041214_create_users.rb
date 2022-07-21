class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string "username"
      t.string "password_digest"
      t.boolean "admin"
      t.string "last_name"
      t.string "first_name"
      t.string "phone"
      t.string "address"
      t.string "email"
      
      t.timestamps
    end
  end
end

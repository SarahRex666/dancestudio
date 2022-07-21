class CreateRegistrations < ActiveRecord::Migration[6.1]
  def change
    create_table :registrations do |t|
      t.integer "dance_class_id"
      t.integer "user_id"
    end
  end
end

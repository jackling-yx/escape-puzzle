class CreatePoints < ActiveRecord::Migration[5.2]
  def change
    create_table :points do |t|
      t.float :xcoordinate
      t.float :ycoordinate
      t.string :text
      t.integer :puzzle_id

      t.timestamps
    end
  end
end

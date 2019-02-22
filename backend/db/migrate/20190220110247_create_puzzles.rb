class CreatePuzzles < ActiveRecord::Migration[5.2]
  def change
    create_table :puzzles do |t|
      t.string :image_url
      t.string :difficulty
      t.string :puzzle_name
      t.string :answer

      t.timestamps
    end
  end
end

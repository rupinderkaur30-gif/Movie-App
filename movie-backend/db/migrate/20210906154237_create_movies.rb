class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image
      t.string :overview
      t.string :release_date
      t.string :rating
      

      t.timestamps
    end
  end
end

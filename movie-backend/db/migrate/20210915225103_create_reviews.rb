class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.references :user 
      t.references :movie
      t.text :content

      t.timestamps
    end
  end
end

class CreateBookmarks < ActiveRecord::Migration[6.0]
  def change
    create_table :bookmarks do |t|
      t.string :comment
      t.reference :movie
      t.reference :list

      t.timestamps
    end
  end
end
class PuzzleSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :difficulty, :answer
end

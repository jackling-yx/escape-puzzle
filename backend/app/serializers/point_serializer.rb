class PointSerializer < ActiveModel::Serializer
  attributes :id, :xcoordinate, :ycoordinate, :text, :box

  belongs_to :puzzle

  def box
    self.object.box
  end
end

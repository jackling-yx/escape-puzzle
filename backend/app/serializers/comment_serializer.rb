class CommentSerializer < ActiveModel::Serializer
  attributes :id, :name, :message, :created_at

  def created_at
    self.object.created_at.strftime("%e %b %Y %H:%M")
  end
end

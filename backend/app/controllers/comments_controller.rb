class CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render json: @comments
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.valid?
            @comment.save
        else
            puts "error"
            # render :new
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:name, :message)
    end
end

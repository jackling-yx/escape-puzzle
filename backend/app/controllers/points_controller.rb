class PointsController < ApplicationController

    # include PointsControllable

    def index
        @points = Point.all
        render json: @points
    end

    def create
        byebug
        points_from_editor.each do |array|
            @point = Point.new(xcoordinate: array[0], ycoordinate: array[1], text: array[2])
            @point.puzzle_id = id
            if @point.valid?
                @point.save
            else
                puts "error"
                # render :new
            end
        end
        return "YAY"

    end

    private

    def point_params
        params.require(:point).permit(:xcoordinate, :ycoordinate, :text)
    end

    def points_from_editor
        params.permit(:create_points)
    end
end

class PointsController < ApplicationController

    def index
        @points = Point.all
        render json: @points
    end

    def create
        @point = Point.new(point_params)
        if @point.valid?
            @point.save
        else
            puts "error"
            # render :new
        end
    end

    private

    def point_params
        params.require(:point).permit(:xcoordinate, :ycoordinate, :text)
    end
end

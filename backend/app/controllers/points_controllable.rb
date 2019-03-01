module PointsControllable
    def add_point(id)
        # byebug
    params[:create_points].each do |array|
        # byebug
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

    def point_from_editor
        params.permit(:create_points)
    end

end
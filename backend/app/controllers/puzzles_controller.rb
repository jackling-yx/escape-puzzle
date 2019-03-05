class PuzzlesController < ApplicationController
        include PointsControllable
 
    def index
        @puzzles = Puzzle.all
        render json: @puzzles
    end

    def create
        @puzzle = Puzzle.new(puzzle_params)
        if @puzzle.valid?
            @puzzle.save
            id = @puzzle.id
            # add_point(id)
            # byebug
            return redirect_to controller: 'points', action: :create, locals: { puzzle_id: id}, status: 307
            # p = PointsController.new
            # p.request = request
            # p.response = response
            # p.create
            # redirect_to PointsController_create_url
            # render 'points/create'
        else
            puts "error"
            # render :new
        end
    end

    def show
        @puzzle = Puzzle.find(params[:id])
        render json: @puzzle
    end
    
    private

    def puzzle_params
        params.require(:puzzle).permit(:image_url, :difficulty, :answer, :creator)
    end
end

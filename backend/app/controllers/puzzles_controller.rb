class PuzzlesController < ApplicationController
     def index
        @puzzles = Puzzle.all
        render json: @puzzles
    end

    def create
        @puzzle = Puzzle.new(puzzle_params)
        if @puzzle.valid?
            @puzzle.save
        else
            puts "error"
            # render :new
        end
    end

    private

    def puzzle_params
        params.require(:puzzle).permit(:xcoordinate, :ycoordinate, :message)
    end
end

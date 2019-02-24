class Point < ApplicationRecord
    validates :xcoordinate, presence: true, uniqueness: true
    validates :ycoordinate, presence: true, uniqueness: true
    validates :text, presence: true

    belongs_to :puzzle

    def coordinates
        [self.xcoordinate, self.ycoordinate]
    end

    def box
        coords = self.coordinates

        # top_left and bottom_right no longer needed.
            # top_left_x = coords[0] - 15
            # top_left_y = coords[1] + 15

            # top_left = [top_left_x, top_left_y]

            top_right_x = coords[0] + 15
            top_right_y = coords[1] + 15

            top_right = [top_right_x, top_right_y]

            bottom_left_x = coords[0] - 15
            bottom_left_y = coords[1] - 15

            bottom_left = [bottom_left_x, bottom_left_y]

            # bottom_right_x = coords[0] + 15
            # bottom_right_y = coords[1] - 15

            # bottom_right = [bottom_right_x, bottom_right_y]

        [bottom_left, top_right]
    end
end

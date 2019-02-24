# Seed data for comments
c1 = Comment.create(name: 'Toast', message: 'Last point was so hard to find!')
c2 = Comment.create(name: 'CoderInHoods', message: 'EZ!')
c3 = Comment.create(name: 'Serena', message: 'Dis gaem sux')
c4 = Comment.create(name: 'Ja9', message: '^Be nice!')

puzzle1 = Puzzle.create!(image_url: 'https://cdn1.epicgames.com/ue/product/Screenshot/QAOfficescreenshot06-1920x1080-322fd1721c6cc608d58d9ad199e926d9.jpg', difficulty: 'Demo Version', puzzle_name:'Demo Puzzle', answer: '12345')

# Seed data for default puzzle
p1 = Point.create!(xcoordinate: 760, ycoordinate: 429, text: 'Drawers', puzzle_id: 1)
p2 = Point.create!(xcoordinate: 607, ycoordinate: 375, text: 'Printer', puzzle_id: 1)
p3 = Point.create!(xcoordinate: 476, ycoordinate: 322, text: 'Whiteboard Note', puzzle_id: 1)
p4 = Point.create!(xcoordinate: 444, ycoordinate: 427, text: 'Computer for Passcode', puzzle_id: 1)
p5 = Point.create!(xcoordinate: 845, ycoordinate: 319, text: 'Clock', puzzle_id: 1)
p6 = Point.create!(xcoordinate: 858, ycoordinate: 485, text: 'Notes', puzzle_id: 1)
p7 = Point.create!(xcoordinate: 932.5, ycoordinate: 512, text: 'Notes 2', puzzle_id: 1)
p8 = Point.create!(xcoordinate: 665, ycoordinate: 85, text: 'Smoke Detector', puzzle_id: 1)
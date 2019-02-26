# Seed data for comments
c1 = Comment.create(name: 'Toast', message: 'Last point was so hard to find!')
c2 = Comment.create(name: 'CodersInHoods', message: 'EZ!')
c3 = Comment.create(name: 'Serena', message: 'Dis gaem sux')
c4 = Comment.create(name: 'Ja9', message: '^Be nice!')

puzzle1 = Puzzle.create!(image_url: 'https://cdn1.epicgames.com/ue/product/Screenshot/QAOfficescreenshot06-1920x1080-322fd1721c6cc608d58d9ad199e926d9.jpg', difficulty: 'Demo Version', puzzle_name:'Demo Puzzle', answer: '12345')

# Seed data for default puzzle
p1 = Point.create!(xcoordinate: 760, ycoordinate: 429, text: "[4] The label says: 'return Drawers.current_position / 2'", puzzle_id: 1)
p2 = Point.create!(xcoordinate: 600, ycoordinate: 375, text: "[3] The LCD display just says: 'Valve can't count to...'", puzzle_id: 1)
p3 = Point.create!(xcoordinate: 476, ycoordinate: 322, text: "[5] Some scribbled notes... It says: [25, 35, 10, 55].map( element => element / 5)[0]", puzzle_id: 1)
p4 = Point.create!(xcoordinate: 845, ycoordinate: 319, text: "[1 + 2] Guess it's lunchtime!", puzzle_id: 1)
p5 = Point.create!(xcoordinate: 858, ycoordinate: 485, text: "Looks like they're reading through some terms and conditions... Not going to bother reading those...", puzzle_id: 1)
p6 = Point.create!(xcoordinate: 932.5, ycoordinate: 512, text: "Looks like they're reading through some terms and conditions... Not going to bother reading those...", puzzle_id: 1)
p7 = Point.create!(xcoordinate: 665, ycoordinate: 85, text: "Smoke detector... I can't reach that...", puzzle_id: 1)
p8 = Point.create!(xcoordinate: 25, ycoordinate: 289, text: "Nobody is here... yet...", puzzle_id: 1)
p9 = Point.create!(xcoordinate: 24, ycoordinate: 330, text: "I better hurry...", puzzle_id: 1)
p10 = Point.create!(xcoordinate: 26, ycoordinate: 380, text: "I think someone is coming...", puzzle_id: 1)
last = Point.create!(xcoordinate: 444, ycoordinate: 427, text: 'Computer for Passcode', puzzle_id: 1)
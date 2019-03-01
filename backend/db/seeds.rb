# Seed data for comments
c1 = Comment.create(name: 'Toast', message: 'Last point was so hard to find!')
c2 = Comment.create(name: 'CodersInHoods', message: 'EZ!')
c3 = Comment.create(name: 'Serena', message: 'Dis gaem sux')
c4 = Comment.create(name: 'Ja9', message: '^Be nice!')

puzzle1 = Puzzle.create!(image_url: 'https://cdn1.epicgames.com/ue/product/Screenshot/QAOfficescreenshot06-1920x1080-322fd1721c6cc608d58d9ad199e926d9.jpg', difficulty: 'Demo Version', puzzle_name:'Demo Puzzle', answer: '35124')

# Seed data for default puzzle
[
 [ xcoordinate: 760, ycoordinate: 429, text: "[5] The label says: 'return Drawers.current_position / 2'", puzzle_id: 1],
 [xcoordinate: 600, ycoordinate: 375, text: "[1] The LCD display just says: 'Valve can't count to...'", puzzle_id: 1],
 [xcoordinate: 476, ycoordinate: 322, text: "[2] Some scribbled notes... It says: [25, 35, 10, 55].map( element => element / 5][0]", puzzle_id: 1],
 [xcoordinate: 845, ycoordinate: 319, text: "[3 + 4] Guess it's lunchtime!", puzzle_id: 1],
 [xcoordinate: 858, ycoordinate: 485, text: "Looks like they're reading through some terms and conditions... Not going to bother reading those...", puzzle_id: 1],
 [xcoordinate: 932.5, ycoordinate: 512, text: "Looks like they're reading through some terms and conditions... Not going to bother reading those...", puzzle_id: 1],
 [xcoordinate: 665, ycoordinate: 85, text: "Smoke detector... I can't reach that...", puzzle_id: 1],
 [xcoordinate: 25, ycoordinate: 289, text: "Nobody is here... yet...", puzzle_id: 1],
 [xcoordinate: 24, ycoordinate: 330, text: "I better hurry...", puzzle_id: 1],
 [xcoordinate: 26, ycoordinate: 380, text: "I think someone is coming...", puzzle_id: 1],
 [xcoordinate: 184, ycoordinate: 418, text: "Some random documents... Nothing useful.", puzzle_id: 1],
 [xcoordinate: 248, ycoordinate: 419, text: "Some random documents... Nothing useful.", puzzle_id: 1],
 [xcoordinate: 301, ycoordinate: 420, text: "Some random documents... Nothing useful.", puzzle_id: 1],
 [xcoordinate: 257, ycoordinate: 541, text: "A bin.", puzzle_id: 1],
 [xcoordinate: 768, ycoordinate: 309, text: "A picture of a yatch...", puzzle_id: 1],
 [xcoordinate: 552, ycoordinate: 407, text: "A plant. Looks like it needs some watering.", puzzle_id: 1],
 [xcoordinate: 347, ycoordinate: 452, text: "A family of 4. Everyone but the dad has their faces scratched out.", puzzle_id: 1],
 [xcoordinate: 131, ycoordinate: 534, text: "His briefcase is empty. How inconvenient...", puzzle_id: 1],
 [xcoordinate: 541, ycoordinate: 142, text: "The lights are off. I think I'll keep it that way...", puzzle_id: 1],
 [xcoordinate: 601, ycoordinate: 153, text: "The lights are off. I think I'll keep it that way...", puzzle_id: 1],
 [xcoordinate: 444, ycoordinate: 427, text: 'Computer for Passcode', puzzle_id: 1]
]

points_array = [ [] ] 
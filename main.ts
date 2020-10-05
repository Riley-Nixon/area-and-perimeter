game.splash("Calculating the area and perimeter of a trapazoid")
let top = game.askForNumber("enter the top length")
let bottom = game.askForNumber("enter the bottom length")
let slope = game.askForNumber("enter the slope length")
let height = game.askForNumber("enter the height")
let area = height * top
let perimeter = slope * 2 + (top + bottom)
game.splash("The area is " + convertToText(area) + " cm2")
game.splash("The perimeter is " + convertToText(perimeter) + " cm")

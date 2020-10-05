// 
game.splash("Calculating the area and perimeter of a trapezoid")
let top = game.askForNumber("enter the top length")
let bottom = game.askForNumber("enter the base length")
let slope = game.askForNumber("enter the slope length")
let height = game.askForNumber("enter the height")
let tbx2 = (bottom + top) * 2
let area = tbx2 + height
let perimeter = slope * 2 + (top + bottom)
game.splash("The area is " + convertToText(area) + " cm2")
game.splash("The perimeter is " + convertToText(perimeter) + " cm")

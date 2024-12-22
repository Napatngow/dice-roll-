let randomNumber = 0
input.onGesture(Gesture.Shake, function () {
    // Generate a random number between 1 and 6
    randomNumber = Math.randomRange(1, 6)
    // Show the random number on the LED screen
    basic.showNumber(randomNumber)
    // Wait for a second, then clear the screen
    basic.pause(1000)
    basic.clearScreen()
})
// Keep the program running
// Nothing in the forever loop since input.onGesture is event-driven
basic.forever(function () {
	
})

// javascript

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let randomPassword1El = document.getElementById("random-password1")
let randomPassword2El = document.getElementById("random-password2")

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}



function genPassword() {
    randomPassword1El.textContent = ""
    randomPassword2El.textContent = ""
    for (let i = 0; i < 16; i++) {
    randomPassword1El.textContent += getRandomCharacter()
    }
    for (let i = 0; i < 16; i++) {
    randomPassword2El.textContent += getRandomCharacter()
    }
}
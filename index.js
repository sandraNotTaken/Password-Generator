const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

console.log(characters)

let pwBtn = document.getElementById("pw-btn");
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let myRange = document.getElementById("myRange")
let output = document.getElementById("range-p")

myRange.oninput = function() {
    output.innerHTML = "Value: " + myRange.value
} 

function getRandomChar() {
    let randomChar = Math.ceil( Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < myRange.value; i++) {
        randomPassword += getRandomChar()
    }
    return randomPassword
}

pwBtn.addEventListener("click", function() {
    password1.value = generateRandomPassword()
    password2.value = generateRandomPassword()
})
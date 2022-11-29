
let randomNumber1 = Math.floor( ( Math.random() * 6) + 1 )
let randomNumber2 = Math.floor( ( Math.random() * 6) + 1 )
let randomImage1 = "images/dice" + randomNumber1 + ".png"
let randomImage2 = "images/dice" + randomNumber2 + ".png"

let image1 = document.getElementById("img1").setAttribute("src" , randomImage1)
let image2 = document.getElementById("img2").setAttribute("src" , randomImage2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Win";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Win";
}
else{
    document.querySelector("h1").innerHTML = "Draw Match";
}
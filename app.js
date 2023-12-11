const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];
cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector("#grid")
let score = document.getElementById("score")
let cardChosen = []
let cardChosenID = []
const cardWon = []

function createBoard(){
    for(let i = 0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
  const cards = document.querySelectorAll("#grid img")

  const optionOneID = cardChosenID[0]
  const optionTwoID = cardChosenID[1]

  if(cardChosen[0] === cardChosen[1]){
    cards[optionOneID].setAttribute("src", "images/white.png")
    cards[optionTwoID].setAttribute("src", "images/white.png")
    cards[optionOneID].removeEventListener("click", flipCard)
    cards[optionTwoID].removeEventListener("click", flipCard)
    cardWon.push(cardChosen)
  }else {
    cards[optionOneID].setAttribute("src", "images/blank.png")
    cards[optionTwoID].setAttribute("src", "images/blank.png")
  }
score.textContent = cardWon.length
cardChosen = []
cardChosenID = []

if(cardWon.length == cardArray.length/2){
  score.innerHTML = "Tebrikler Kazandınız..."
}

}


function flipCard() {
    const cardID = this.getAttribute("data-id")
    cardChosen.push(cardArray[cardID].name)
    cardChosenID.push(cardID)
    this.setAttribute("src", cardArray[cardID].img)

    if(cardChosen.length == 2) {
      setTimeout(checkMatch, 500)
    }
}

const FRONT = "card_front"
const BACK = "card_back"
const CARD = 'card'
const ICON = 'icon'

const images = [
    'yoshi',
    'bowser',
    'question',
    'block',
    'shell',
    'racoon',
    'boo',
    'mushroom',
    'flower',
    'bullet'];

let cards = null;

startGame();

function startGame() {
    cards = createCardsFromImages(images);
    shuffleCards(cards);
    console.log(cards);

    initializeCards(cards);
}

function initializeCards(cards){
    let gameBoard = document.getElementById("container")

    cards.forEach(card=>{

        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;
           
        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);

    })
}

function createCardContent(card, cardElement){
      
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element) {

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if( face ===  FRONT ) {
          let iconElement = document.createElement('img');
          iconElement.classList.add(ICON);
          iconElement.src = "../assets/images/" + card.icone + ".png";
          cardElementFace.appendChild(iconElement);
    } else{
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}

function shuffleCards(cards) {

    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }

}


createCardsFromImages(images);
function createCardsFromImages(images) {

    let cards = [];

    for (let icon of images) {
        cards.push(createPairFromImage(icon));
    }

    return (cards.flatMap(pair => pair));
}

function createPairFromImage(icon) {

    return [{
            id: createIdWithIcon(icon),
            icone: icon,
            flipped: false,
        },
        {
            id: createIdWithIcon(icon),
            icone: icon,
            flipped: false,
        }
    ]
}

function createIdWithIcon(icon) {
    return icon + parseInt(Math.random() * 1000);
}

function flipCard(){
    this.classList.add("flip");
}
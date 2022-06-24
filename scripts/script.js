const FRONT = "card_front"
const BACK = "card_back"

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
    'bullet'
]

createCardsFromImages(images);

function createCardsFromImages(images) {

    let cards = [];

    for (let icon of images) {
        cards.push(createPairFromImage(icon));
    }

    console.log(cards.flatMap(pair=>pair));
}

function createPairFromImage(image) {

    return [{
        id: createIdWithIcon(image),
        icone: image,
        flipped: false,
    }, 
       {
        id: createIdWithIcon(image),
        icone: image,
        flipped: false,
    }]
}

function createIdWithIcon(image){
    return image + parseInt(Math.random() * 1000); 
}
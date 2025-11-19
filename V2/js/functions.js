let place = [];
const returnedCard = [];
const placeCard = [];
let caseNumber = document.querySelectorAll(".case");

let divCount = document.querySelector(".count");
let count = 0;
let imageSrc = 0;
let value = 0;
let click = 0;

function mix() {
  const order = new Set();
  while (order.size < 12) {
    let ord = Math.floor(Math.random() * 12) + 1;
    order.add(ord);
  }
  console.log(order);
  place = [...order];
  console.log(place);
}
mix();

function initialize() {
  count = 0;
  divCount.innerHTML = `${count}`;
  returnedCard.splice(0, 2);
  placeCard.splice(0, 2);
  for (let card of caseNumber) {
    card.classList.remove("flipped");
    card.classList.remove("unrotate");
    card.classList.remove("rotate");
  }

  for (let i = 1; i < 13; i++){   
    caseNumber.forEach((card) => 
      card.innerHTML= `<img src="medias/image0.png">`)

  }
}


initialize();

function play() {
  caseNumber.forEach((card) => card.addEventListener("click", flip));
}

play();

function flip() {
  click++;
  this.classList.remove("unrotate");
  if (click <= 2) {
    this.classList.add("rotate");
    value = this.getAttribute("value");
    let imageId = document.getElementById(value);
    console.log(value);
    console.log(returnedCard.length);

    if (count < 20) {
      if (returnedCard.length < 2) {
        imageSrc = place[value - 1];

        if (imageSrc > 6) {
          imageSrc = imageSrc - 6;
        }
        this.innerHTML = `<img src="medias/image${imageSrc}.jpg">`;
        console.log(this.getAttribute("src"));

        returnedCard.push(imageSrc);
        placeCard.push(value);
        console.log(returnedCard);
        console.log(placeCard);
      }
      checkCards();
    }
  }
}

function checkCards() {
  if (returnedCard.length === 2) {
    count++;
    divCount.innerHTML = `${count}`;
    if (returnedCard[0] != returnedCard[1]) {
      console.log(returnedCard[0]);
      console.log(caseNumber);
      setTimeout(backCard, 1000);
      returnedCard.splice(0, 2);
    } else {
      for (let card of caseNumber) {
        if (
          card.getAttribute("value") == placeCard[0] ||
          card.getAttribute("value") == placeCard[1]
        )
          card.classList.add("flipped");
      }
      returnedCard.splice(0, 2);
      placeCard.splice(0, 2);
      click = 0;
    }
  }
}

function backCard() {
  for (let card of caseNumber) {
    console.log("placeC0 :" + placeCard[0]);
    console.log("placeC1 :" + placeCard[1]);
    console.log("value : " + card.getAttribute("value"));
    if (
      card.getAttribute("value") == placeCard[0] ||
      card.getAttribute("value") == placeCard[1]
    ) {
      card.classList.remove("rotate");

      card.innerHTML = `<img src="medias/image0.png">`;
      card.classList.add("unrotate");
    }
  }
  placeCard.splice(0, 2);
  click = 0;
}

document.addEventListener("keydown", (event) => {
  if (event.code == "Space") {
    initialize();
  }
});

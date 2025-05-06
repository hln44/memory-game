// const images = [
//   "medias/image0.png",
//   "medias/image1.jpg",
//   "medias/image2.jpg",
//   "medias/image3.jpg",
//   "medias/image4.jpg",
//   "medias/image5.jpg",
//   "medias/image6.jpg",
//   "medias/image7.jpg",
//   "medias/image8.jpg",
//   "medias/image9.jpg",
//   "medias/image10.jpg",
//   "medias/image11.jpg",
//   "medias/image12.jpg",
// ];

// function mix() {
//   for (let i = 1; i < 13; i++) {
//     let id = document.getElementById(i);
//     let ord = Math.floor(Math.random() * 12) + 1;
//     id.classList.add("order" + ord);
//   }
// }
// mix()

// function mix() {
//   const order = [];
//   for (let i = 1; i < 13; i++) {
//     let id = document.getElementById(i);
//     let img = Math.floor(Math.random() * 6) + 1;
//     id.classList.add("img" + img);
//     order.push("image" + img);
//   }
//   console.log(order);
// }

let place = [];
const returnedCard = [];
const placeCard = [];
let caseNumber = document.querySelectorAll(".case");
let divCount = document.querySelector(".count");
let count = 0;
let imageSrc = 0;
let value = 0;

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
  // mix();
  for (let i = 1; i < 13; i++) {
    let id = document.getElementById(i);
    id.src = "medias/image0.png";
  }
}

initialize();

function play() {
  caseNumber.forEach((card) => card.addEventListener("click", flip));
}

play();

function flip() {
  value = this.getAttribute("value");
  let imageId = document.getElementById(value);
  // console.log(imageId.src);
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
      // this.classList.add("pointerEvent")
      for (let card of caseNumber) {
        if (
          card.getAttribute("value") == placeCard[0] ||
          card.getAttribute("value") == placeCard[1]
        )
          card.classList.add("flipped");
      }
      returnedCard.splice(0, 2);
      placeCard.splice(0, 2);
    }
  }
}

function backCard() {
  // caseNumber.forEach((card) => {
  // console.log(placeCard[0]);
  // console.log(placeCard[1]);

  for (let card of caseNumber) {
    console.log("placeC0 :" + placeCard[0]);
    console.log("placeC1 :" + placeCard[1]);
    console.log("value : " + card.getAttribute("value"));
    if (
      card.getAttribute("value") == placeCard[0] ||
      card.getAttribute("value") == placeCard[1]
    ) {
      card.innerHTML = `<img src="medias/image0.png">`;
      //  placeCard.splice(0,1);
      // } else if (card.getAttribute("value") == placeCard[0]){
      //    card.innerHTML = `<img src="medias/image0.png">`;
      //    placeCard.splice(0, 2);
    }
  }
  placeCard.splice(0, 2);
}

// // Code your solutions in this file

const name = ["Charlie", "Samip", "Ali"];
const event = "surprise"

function writeCards(name, event){
  let thankYouCards = []
  for (let i=0; i<name.length; i++){
    thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}
writeCards(thankYouCards)



writeCards(["Charlie", "Samip", "Ali"], "birthday");

let countdown = 0;

while (countdown < 10) {
  console.log(countdown--);
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown() {
    let number = 10;
    while (number >= 0) {
        console.log(number--);
        debugger;
    }
}
countDown(10);



let str = "Vinith worked on task a. John worked on task c. Kamal completed task c. Vinith was awarded the champ award"

// List of employee names:
let employee = ["Vinith","John","Kamal"];

// Output:
// Vinith: ["worked on task", "was awarded the champ award"]

function ShareAchievement(str) {
  let achiementStr = '', foundName = null,
  names = employee.reduce((acc, curr) => {
    acc[curr] = [];
    return acc
  },{}), letter = '';
  for(let i = 0, len = str.length; i < len; i++) {
    if(str[i].indexOf(' ') > -1) {
      foundName = letter;
      letter.concat(' ');
      if(foundName && letter) achiementStr.concat(letter);
      letter = null;
    } else if(str[i] !== '') letter = letter.concat(str[i]);
    else if(letter) {
      if(letter.indexOf('.') > -1) {
        names[foundName] && names[foundName].push(achiementStr);
        foundName = null;
        achiementStr = null;
      }
      else if(!achiementStr && names[letter]) {
        foundName = letter;
        letter = '';
      }
    }
  }
  return achiementStr;
}

// ShareAchievement(str);



class Cards {
  constructor(cardType, weight) {  
    this.cardType = cardType;
    this.weight = weight;
    this.cards = [];
  }
  createDeck() {
    suit.forEach(item => {
      cards.forEach(card => {
        this.cards.push(`${item}${card}`);
      })
    })
  }

  shuffleDeck() {
    for(let i = 0, length = this.cards.length; i< length; i++) {
      let rNo = this.getRandomNo(1,this.cards.length);
      let card = this.cards[i];
      this.cards[i] = this.cards[rNo];
      this.cards[rNo] = card;
    }
  }
  getRandomNo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getTop5Cards() {
    if(this.cards.length > 0) {
      const items = this.cards.splice(0, 5);
      // this.shuffleDeck();
      document.getElementById('result').append(items);
    } else alert('all cards are drawn');
  }
}

const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const suit = ["D", "H", "S", "C"];
let C = new Cards(suit, cards);
C.createDeck();
C.shuffleDeck();
C.getTop5Cards();
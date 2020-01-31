window.onload = function() {
  
};

function getSuiteClass(suit) {
  switch (suit) {
    case 'Diamonds':
      return 'suit-diamonds';
    case 'Spades':
      return 'suit-spades';
    case 'Hearts':
      return 'suit-hearts';
    case 'Clubs':
      return 'suit-clubs';
  }
}

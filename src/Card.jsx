const card = {
  suit: "Hearts",
  rank: "A"
}

function Card() {
  return <h1>{card.rank} of {card.suit}</h1>
}

export default Card;

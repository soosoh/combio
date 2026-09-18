const red = "#FF0000"
const black = "#000000"
//change these values later

const colors = {
  Spades: black,
  Hearts: red,
  Diamonds: red,
  Clubs: black
}

function Card({ rank, suit }) {
  return <article style={
    {
      color: colors[suit]
    }
  } className="card">
    <h1>{rank} of {suit}</h1>
  </article >
}

export default Card;

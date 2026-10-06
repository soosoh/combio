const red = "#FF0000"
const black = "#000000"
//change these values later

const colors = {
  Spades: black,
  Hearts: red,
  Diamonds: red,
  Clubs: black
}

const select = () => {

}


function Card({ rank, suit }) {
  return <button style={
    {
      color: colors[suit],
    }
  } className="card"
  onclick={select}>
    <h1 class="cardText">{rank} of {suit}</h1>
  </button >
}

export default Card;

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
  return <article style={
    {
      color: colors[suit],
      display: "inline"
    }
  } className="card"
  onclick={select}>
    <h1>{rank} of {suit}</h1>
  </article >
}

export default Card;

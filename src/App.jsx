import Card from './Card.jsx'
import './App.css'

const ranks = ["A", ...Array.from({ length: 10 }, (_, i) => String(i + 1)), "J", "Q", "K"]
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"]
function fromSuit(suit) {
  return ranks.map(rank => <Card rank={rank} suit={suit} />);
}

function App() {
  return (
    <>
      {suits.map(suit => fromSuit(suit))}
    </>
  )
}

export default App

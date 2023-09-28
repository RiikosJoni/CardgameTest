import Card from './components/Card'
import "./App.css"

const playerCard = {
  image: 'https://placebeard.it/240x200',
  stats: [{name:'Rudeness: ', value: 15},{name:'Pollution: ', value: 30},{name:'Destruction: ', value: 30},{name:'Weight: ', value: 60},{name:'Rarity: ', value: 'Extra Rare'}]
}

export default function App(){
  return(
    <>
      <h1>Gary-Cards.</h1>
      <Card card={playerCard}/>
    </>
  );
}
import Card from './components/Card'
import "./App.css"

const playerCard = {
  image: 'https://placebeard.it/240x200',
  stats: [{name:'Rudeness: ', value: 15},
          {name:'Pollution: ', value: 30},
          {name:'Destruction: ', value: 30},
          {name:'Weight: ', value: 60},
          {name:'Rarity: ', value: 'Extra Rare'}]
}

const enemyCard = {
  image: 'https://placebeard.it/240x200',
  stats: [{name:'Rudeness: ', value: 15},
          {name:'Pollution: ', value: 30},
          {name:'Destruction: ', value: 30},
          {name:'Weight: ', value: 60},
          {name:'Rarity: ', value: 'Extra Rare'}]
}

export default function App(){

  function compareCards(){
    console.log("comparison started!")
  }

  return(
    <>
      <h1>Gary-Cards.</h1>
      <div className='game'>
        <Card card={playerCard}/>
        <button onClick={compareCards} type="button">Play</button>
        <Card card={enemyCard}/>
      </div>
    </>
  );
}
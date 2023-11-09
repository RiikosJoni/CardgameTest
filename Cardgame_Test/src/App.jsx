import Card from './components/Card'
import "./App.css"
import { useState } from 'react'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min +1)+min);

const playerCard = {
  image: 'https://placebeard.it/240x200?image=' + index,
  stats: [{name:'Rudeness: ', value: getRandomInt(0,150) + '%'},
          {name:'Pollution: ', value: getRandomInt(0,150) + '%'},
          {name:'Destruction: ', value: getRandomInt(1,99) * 100 * (10 * getRandomInt(0,1) + 1) + ' ha'},
          {name:'Weight: ', value: getRandomInt(1,400) + ' kg'},
          {name:'Rarity: ', value: 'Gary'}]
}

const enemyCard = {
  image: 'https://placebeard.it/240x200?image=' + index,
  stats: [{name:'Rudeness: ', value: getRandomInt(0,150) + '%'},
          {name:'Pollution: ', value: getRandomInt(0,150) + '%'},
          {name:'Destruction: ', value: getRandomInt(1,99) * 100 * (10 * getRandomInt(0,1) + 1) + ' ha'},
          {name:'Weight: ', value: getRandomInt(1,400) + ' kg'},
          {name:'Rarity: ', value: 'Gary'}]
}

const createCard = index =>({
  image: 'https://placebeard.it/240x200?image=' + index,
  stats: [{name:'Rudeness: ', value: getRandomInt(0,150) + '%'},
          {name:'Pollution: ', value: getRandomInt(0,150) + '%'},
          {name:'Destruction: ', value: getRandomInt(1,99) * 100 * (10 * getRandomInt(0,1) + 1) + ' ha'},
          {name:'Weight: ', value: getRandomInt(1,400) + ' kg'},
          {name:'Rarity: ', value: 'Gary'}],
  id: crypto.randomUUID()
});

const deck = Array(16).fill(null).map((_,index) => createCard(index));
const half = Math.ceil(deck.length / 2);
const dealCards =()=>{
  return {
    player: deck.slice(0,half),
    enemy: deck.slice(half)
  }
}

export default function App(){

  const[result, setResult] = useState('');
  const[cards, setCards] = useState(dealCards);

  function compareCards(){
    console.log("The battle of the Garies has started!");

    const playerStat = cards.player[0].stats[0];
    const enemyStat = cards.enemy[0].stats[0];

    if(playerStat.value === enemyStat.value){
      setResult("It's a Draw!");
    }
    else if(playerStat.value > enemyStat.value){
      setResult("Your Gary was the Gariest!");
    }
    else { setResult("Your Gary was the most Garyless..."); }
  }

  return(
    <>
      <h1>Gary-Cards.</h1>
      <div className='game'>
        <Card card={cards.player[0]}/>
        <div className='center-area'>
          <p>{result || 'Press the button'}</p>
          <button onClick={compareCards} type="button">Play</button>
        </div>
        <Card card={cards.enemy[0]}/>
        {console.log(dealCards())}
      </div>
    </>
  );
}
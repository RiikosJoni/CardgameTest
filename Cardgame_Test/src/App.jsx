import Card from './components/Card'
import "./App.css"
import { useState } from 'react'
import PlayButton from './components/PlayButton';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min +1)+min);

const playerCard = {
  image: 'https://placebeard.it/240x200',
  stats: [{name:'Rudeness: ', value: getRandomInt(0,150) + '%'},
          {name:'Pollution: ', value: getRandomInt(0,150) + '%'},
          {name:'Destruction: ', value: getRandomInt(1,99) * 100 * (10 * getRandomInt(0,1) + 1) + ' ha'},
          {name:'Weight: ', value: getRandomInt(1,400) + ' kg'},
          {name:'Rarity: ', value: 'Gary'}]
}

const enemyCard = {
  image: 'https://placebeard.it/240x200',
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
  shuffle(deck);
  return {
    player: deck.slice(0,half),
    enemy: deck.slice(half)
  };
};

function shuffle(array){
  for(let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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
        <ul className='card-list'>
          {cards.player.map((pCard, index) =>(
            <li className='card-list-item player' key={pCard.id}>
              <Card card={index === 0 ? pCard : null}/>
            </li>
          ))}
        </ul>

        <div className='center-area'>
          <p>{result || 'Press the button'}</p>
          <PlayButton text={'Play'} handleClick={compareCards} />
        </div>

        <ul className='card-list enemy'>
          {cards.enemy.map(eCard =>(
            <li className='card-list-item enemy' key={eCard.id}>
              <Card card={eCard}/>
            </li>
          ))}
        </ul>

        {console.log(dealCards())}
      </div>
    </>
  );
};
import {useState } from 'react';
import './App.css';
import ZombieFightersListItem from './components/ZombieFightersListItem/ZombieFightersListItem.jsx';


const App = () => {
  const [isTeam, setIsTeam] = useState([]);

  const [hasMoney, setHasMoney] = useState(100);

  const [isZombieFighters, setIsZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
);

console.log('Our isTeam state value is:', isTeam);
console.log('Our hasMoney state value is:', hasMoney);
console.log('Our isZombieFighters state value is:', isZombieFighters);

// placeholder fn for handling mode changes
// we'll implement the functionality in the next step
const handleAddFighter = (fighter) => {
// checking if fighter's reserved to a team
const alrOnTeam = isTeam.some((member) => member.id === fighter.id);
if (alrOnTeam) {
  console.log(`${fighter.name} is already on a team`);
  return;
}
// purchasing fighter
if (hasMoney < fighter.price) {
  console.log("Not enough money!")
  return;
}
setHasMoney(hasMoney-fighter.price);
// add fighter to team, remove from available fighters
setIsTeam([...isTeam,fighter])

const updatedZombies= isZombieFighters.filter((z) => z.id !== fighter.id);
setIsZombieFighters(updatedZombies);

  console.log('Added fighter')
}
const handleRemoveFighter = (fighter) => {
  // remove from team
  const updatedTeam = isTeam.filter((member) => member.id !== fighter.id);
  setIsTeam(updatedTeam)
  //add back to zombieFighters list
  setIsZombieFighters([...isZombieFighters, fighter]);
  //resale value
  setHasMoney(hasMoney + fighter.price);

  console.log(`${fighter.name} was removed from your team`);

}
 const totalStrength = isTeam.reduce((sum, fighter) => sum + fighter.strength, 0)
 const totalAgility = isTeam.reduce((sum, fighter) => sum + fighter.agility, 0)
  return (
    <>
    <main>
      <div className= {isTeam ? 'yes' : 'no'} >
        <h1>Hello World</h1>
        </div>
      </main>
      <h2> Your Team </h2>
      <p> Currently, you have ${hasMoney}</p>
      <p>Your team has {totalStrength} strength points</p>
      <p> Your team has {totalAgility} agility points </p>
      <h3>Your Fighters</h3>
      {isTeam.length === 0 ? (
        <p> Pick some Team members! </p>
      ) : (
        <ul>
          {isTeam.map((fighter) => (
            <li key = {fighter.id}>
                <img src={fighter.img} alt={`${fighter}'s image.`} />
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength} </p>
                <p> Agility: {fighter.agility} </p>
                <button onClick={() => handleRemoveFighter(fighter)}> Remove Fighter</button>
            </li>
          ))}
          </ul>
        )}

      <h2>Zombie Fighters</h2>
        <ul>
          {isZombieFighters.map((fighter) => (
            <ZombieFightersListItem
              key={fighter.id}
              fighter={fighter.name}
              price= {fighter.price}
              strength={fighter.strength}
              agility= {fighter.agility}
              image= {fighter.img}
              handleAddFighter={() => handleAddFighter(fighter)}
            />
          ))}
        </ul>
    </>
  );
};

export default App

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import Pendu from './components/Pendu';

function App() {
  const [word, setWord] = useState("");
  const [foundLetters, setFoundLetters] = useState([]);
  const [count, setcount] = useState(0);
  const [clickedLetters, setClickedLetters] = useState(false);
    
  useEffect(() => {
  const fetchWord = async () => {
      await fetch("https://trouve-mot.fr/api/sizemin/6")
      .then((response) => response.json())
      .then((words) => setWord(words[0].name))
  }    
  fetchWord();
  }, []);

  

console.log(word);

const handleLetterClick = (letter) =>{
  const letterMin = letter.toLowerCase();
  setClickedLetters((prev) => ({ ...prev, [letter]: true }));
  if (word.includes(letterMin)) {
    setFoundLetters((prev) => [...prev, letter])
  } else {
    setcount((prev) => prev + 1)
  }
}

console.log('foundLetters', foundLetters);
console.log('count', count);

  // Griser les lettres déja cliquées

  // Faire un emplacement ou le dessin va s'afficher (le pendu)
  // Afficher le nombre de tentitavies restantes

  // en fonction du compteur afficher les div du pendu 

  //let json = '[{"name":"chauss\\u00e9e","categorie":"LES VOYAGES"}]';
  //let data = JSON.parse(json);
  //console.log(data[0].name); // Affichera "chaussée"
    
  "https://trouve-mot.fr/api/sizemin/6"

  




return (
    <>
      <div className="container">
        <h1>Jeu du Pendu</h1>
        { count >= 9 ? 
          <>
            <p>Vous avez perdu</p> 
            <Pendu count={count} />
            <button onClick={() => window.location.reload()}>Rejouer</button>
          </>
          :
          <>
            <Keyboard handleLetterClick={handleLetterClick} clickedLetters={clickedLetters}/>
            <Pendu count={count} />
            <Word word={word} foundLetters={foundLetters} />
          </>
        }
      </div>
    </>
  )
}

export default App

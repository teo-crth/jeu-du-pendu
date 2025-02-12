import React from 'react';
import './keyboard.css';

const Keyboard = ({ handleLetterClick, clickedLetters }) => {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        
        <div className='container-keyboard'>
            {alphabet.map((letter) => ( 
            <button 
             key= {letter}
             onClick={()=>handleLetterClick(letter)}
             className={clickedLetters[letter] ? 'letter clicked' : 'letter'}>
                { letter }
            </button>

            ))}

        </div>
    );
};

export default Keyboard;
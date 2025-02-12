import React from 'react';
import { useEffect, useState } from 'react';
import './Word.css';

const Word = ({word, foundLetters}) => {

    const wordArray = word.split("");
    console.log('wordArray', wordArray);
    
    return (
        <div className='container-letter-hidden'>
            {wordArray.map((letter, index) => (
                foundLetters.includes(letter.toUpperCase()) ? 
                <div className="container-letter-and-hyphen">
                    <p className='show-letter'>{letter.toUpperCase()}</p> 
                    <div key={index} className="letter-hyphen"></div>
                </div> 
                : <div key={index} className="letter-hyphen"></div>
            ))}
        </div>
    );
};

export default Word;
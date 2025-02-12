import React from 'react';
import './pendu.css';

const Pendu = ({count}) => {

    return (
        <div className='container-pendu'>
            {count === 1 && 
                <div className='pendu-1'></div>
            }
            {count === 2 && 
                <>
                    <div className='pendu-1'></div>
                    <div className='pendu-2'></div>
                </>
            }
            {count === 3 && 
                <>
                    <div className='pendu-1'></div>
                    <div className='pendu-2'></div>
                    <div className='pendu-3'></div>
                </>
            }
            {count === 4 && 
                <>
                    <div className='pendu-1'></div>
                    <div className='pendu-2'></div>
                    <div className='pendu-3'></div>
                    <div className='pendu-4'></div>
                </>
            }
            {count === 5 && 
                <>
                    <div className='pendu-1'></div>
                    <div className='pendu-2'></div>
                    <div className='pendu-3'></div>
                    <div className='pendu-4'></div>
                    <div className='pendu-5'></div>
                </>
            }
            {count === 6 && 
                <>
                    <div className='pendu-1'></div>
                    <div className='pendu-2'></div>
                    <div className='pendu-3'></div>
                    <div className='pendu-4'></div>
                    <div className='pendu-5'></div>
                    <div className='pendu-6'></div>
                </>
            }
            {count === 7 && 
                <>
                    <div className='pendu-1'></div>
                    <div className='pendu-2'></div>
                    <div className='pendu-3'></div>
                    <div className='pendu-4'></div>
                    <div className='pendu-5'></div>
                    <div className='pendu-6'></div>
                    <div className='pendu-7'></div>
                </>
            }
            {count === 8 && 
                <>
                    <div className='pendu-1'></div>
                    <div className='pendu-2'></div>
                    <div className='pendu-3'></div>
                    <div className='pendu-4'></div>
                    <div className='pendu-5'></div>
                    <div className='pendu-6'></div>
                    <div className='pendu-7'></div>
                    <div className='pendu-8'></div>
                </>
            }
            {count === 9 && 
                <>
                    <div className='pendu-1'></div>
                    <div className='pendu-2'></div>
                    <div className='pendu-3'></div>
                    <div className='pendu-4'></div>
                    <div className='pendu-5'></div>
                    <div className='pendu-6'></div>
                    <div className='pendu-7'></div>
                    <div className='pendu-8'></div>
                    <div className='pendu-9'></div>
                </>
            }
        </div>
    );
};

export default Pendu;
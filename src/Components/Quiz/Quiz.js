import React from 'react';
import './Quiz.css';

const Quiz = ({ quiz }) => {
    const { question, options } = quiz;


    return (
        <div>
            <div className='display-question m-4 rounded-lg p-6 '>

                <h2 className='text-2xl bold text-center mb-5 font-bold'>{question.slice(3, -4)}</h2>

                <div className='text-center options-bar grid grid-cols-2 gap-4 '>


                    <div className='op-1 bg-emerald-100 border border-emerald-900 p-3 rounded-md' >
                        <input type="radio" id="huey" name="drone" value="huey"
                            checked />
                        <label for="huey" className='ml-3' >{options[0]}</label>
                    </div>

                    <div className='op-1 bg-emerald-100 border border-emerald-900 p-3 rounded-md' >
                        <input type="radio" id="dewey" name="drone" value="dewey" />
                        <label for="dewey" className='ml-3'>{options[1]}</label>
                    </div>

                    <div className='op-1 bg-emerald-100 border border-emerald-900 p-3 rounded-md' >
                        <input type="radio" id="louie" name="drone" value="louie" />
                        <label for="louie" className='ml-3'>{options[2]}</label>
                    </div>
                    <div className='op-1 bg-emerald-100 border border-emerald-900 p-3 rounded-md'  >
                        <input type="radio" id="louie" name="drone" value="louie" />
                        <label for="louie" className='ml-3'>{options[3]}</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Quiz;
import React from 'react';
import './Quiz.css';

const Quiz = ({ quiz, option }) => {
    const { question, options } = quiz;


    return (
        <div>
            <div className='display-question m-4 rounded-lg p-6 '>
                <form action="/action_page.php">
                    <h2 className='text-2xl bold text-center mb-5 font-bold'>{question.slice(3, -4)}</h2>

                    <div className='text-center options-bar'>
                        <div>{options}</div>
                    </div>
                </form>
            </div>

            {/* <h1>{question}</h1>
            <ul><ol>{options}</ol></ul> */}
        </div>
    );
};

export default Quiz;
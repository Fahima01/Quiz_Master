import React from 'react';
import './QuizCatagory.css';

const QuizCatagory = ({ quiz }) => {
    const { name, logo } = quiz;
    return (
        <div className='quiz-card relative'>
            <div className='quiz-card-img'>

                <img src={logo} alt=''></img>
            </div>
            <div className='quiz-card-details pt-5'>
                <h2 className='font-semibold text-xl'>{name}</h2>
                <button className='absolute bottom-3 mr-5 bg-purple-600 card-btn text-white rounded-lg '>Play Quiz</button>
            </div>

        </div>
    );
};

export default QuizCatagory;
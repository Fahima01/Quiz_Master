import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCatagory.css';


const QuizCatagory = ({ quiz }) => {

    const { id, name, logo } = quiz;

    return (
        <div className='quiz-card relative'>
            <div className='quiz-card-img'>

                <img src={logo} alt=''></img>
            </div>
            <div className='quiz-card-details pt-5'>
                <h2 className='font-semibold text-xl'>{name}</h2>

                <p className='absolute bottom-3 mr-5 bg-purple-600 card-btn text-white rounded-lg '><Link to={`/quiz/${id}`}>Play Quiz</Link>  </p>




                {/* <button className='absolute bottom-3 mr-5 bg-purple-600 card-btn text-white rounded-lg '>Play Quiz</button> */}
            </div>

        </div>
    );
};

export default QuizCatagory;
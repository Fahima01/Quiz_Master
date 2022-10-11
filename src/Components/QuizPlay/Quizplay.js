import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizplay.css';

const QuizPlay = () => {
    const quizes = useLoaderData().data
    console.log(quizes)
    return (
        <div className='display-question'>
            {
                quizes.questions.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default QuizPlay;
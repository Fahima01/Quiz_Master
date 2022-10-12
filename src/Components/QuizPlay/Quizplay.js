import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Option from '../Options/Option';
import Quiz from '../Quiz/Quiz';

const Quizplay = () => {
    const quizPlay = useLoaderData().data
    //console.log(quizPlay)
    return (
        <div>

            <h1 className='text-3xl font-semibold py-6 text-center text-fuchsia-700 drop-shadow'>Quiz name {quizPlay.name}</h1>
            <div>
                {
                    quizPlay.questions.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}

                    ></Quiz>

                    )
                }
            </div>
            <div>

            </div>

        </div>
    );
};

export default Quizplay;










// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import Quiz from '../Quiz/Quiz';
// import './Quizplay.css';

// const QuizPlay = () => {
//     const quizes = useLoaderData().data
//     console.log(quizes)
//     return (
//         <div>
//             {
//                 quizes.questions.map(quiz => <Quiz
//                     key={quiz.id}
//                     quiz={quiz}
//                 ></Quiz>)
//             }
//         </div>
//     );
// };

// export default QuizPlay;
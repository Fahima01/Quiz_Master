import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCatagory from '../Quiz_catagory/Quiz_catagory';
import './Home.css';
import image from './images/header.png';


const Home = () => {
    const selectQuiz = useLoaderData().data
    //console.log(selectQuiz)

    return (
        <div>
            <img className='header-img' src={image} alt="" />
            <div className='bg-blue-50 home-container'>

                <div>

                    <div className='catagory-container' >
                        {
                            selectQuiz.map(quiz => <QuizCatagory
                                key={quiz.id}
                                quiz={quiz}

                            ></QuizCatagory>)
                        }
                    </div>

                </div>


            </div>
        </div>

    );
};

export default Home;
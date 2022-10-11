import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import image from './images/header.png'


const Home = () => {
    const selectQuiz = useLoaderData().data
    console.log(selectQuiz)

    return (
        <div className='bg-blue-50 home-container'>
            <div>
                <h1>Quiz catagory : {selectQuiz.length}</h1>
            </div>

        </div>
    );
};

export default Home;
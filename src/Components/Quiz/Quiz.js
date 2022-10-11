import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizes = useLoaderData().data
    console.log(quizes)
    return (
        <div>
            <h2 className='text-4xl'>This is Quiz: {quizes.length}</h2>
        </div>
    );
};

export default Quiz;
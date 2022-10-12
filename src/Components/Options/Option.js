import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Option = () => {
    const options = useLoaderData().data
    console.log(options)
    return (
        <div>
            {
                options.options.map(option => <Quiz
                    option={option}

                ></Quiz>)
            }
        </div>
    );
};

export default Option;
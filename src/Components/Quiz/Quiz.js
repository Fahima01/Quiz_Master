import React, { useState } from 'react';
import './Quiz.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    //console.log(quiz)
    console.log()



    const handleOnClick = (quiz) => {
        //console.log(options[0])
        if (options === correctAnswer) {

        }
        else {
            toast.error('wrong')
        }
    }

    return (
        <div>
            <div className='display-question m-4 rounded-lg p-6 '>
                <div><h2 className='text-2xl bold mb-5 font-bold'>{question.slice(3, -4)}</h2>
                </div>


                <div className='text-center options-bar grid md:grid-cols-2 gap-4 '>
                    <div onClick={() => handleOnClick({ quiz })} className='op-1 bg-emerald-100 border border-emerald-900 p-3 rounded-md'  >




                        <p>1. {options[0]}</p>
                    </div>

                    <div onClick={() => handleOnClick(quiz)} className='op-1 bg-emerald-100 border border-emerald-900 p-3 rounded-md' >
                        <p>2. {options[1]}</p>
                    </div>

                    <div onClick={() => handleOnClick(quiz)} className='op-1 bg-emerald-100 border border-emerald-900 p-3 rounded-md' >
                        <p>3. {options[2]}</p>
                    </div>
                    <div onClick={() => handleOnClick(quiz)} className='op-1 bg-emerald-100 border border-emerald-900 p-3 rounded-md'  >
                        <p>4. {options[3]}</p>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Quiz;
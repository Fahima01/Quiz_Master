import React from 'react';

const Quiz = ({ quiz, option }) => {
    const { question, options } = quiz;


    return (
        <div>
            <form action="/action_page.php">
                <p className='text-2xl bold'>{question}</p>
                <input type="radio" name="fav_language" />
                <label>{options}</label>


            </form>
            {/* <h1>{question}</h1>
            <ul><ol>{options}</ol></ul> */}
        </div>
    );
};

export default Quiz;
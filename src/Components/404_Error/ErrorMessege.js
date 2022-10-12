import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMessege = () => {
    return (
        <div className="flex m-auto items-center justify-center h-screen text-center bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <div>
                <h1 className='text-6xl font-bold  pb-5'>PAGE NOT FOUND</h1>
                <Link to='/'>Back to <button className='bg-teal-400 text-white px-6 py-2 rounded-md '>Home</button></Link>
            </div>

        </div>
    );
};

export default ErrorMessege;
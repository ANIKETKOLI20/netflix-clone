import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    // State to manage form inputs
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });

    // Handle input changes
    const handleInputs = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        // Reset form fields after submission
        setInputs({
            username: '',
            password: '',
        });
    };

    return (
        <div className='h-screen w-full hero-bg'>
            <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
                <Link to='/'>
                    <img src='../../public/netflix-logo.png' alt='logo' className='w-52' />
                </Link>
            </header>

            <div className='flex justify-center items-center mt-20 mx-3'>
                <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
                    <h1 className='text-center text-white text-2xl font-bold mb-4'> Log In</h1>

                    <form className='space-y-4' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='username' className='text-sm font-medium text-gray-300 block'>
                                Username
                            </label>
                            <input
                                type='text'
                                id='username'
                                name='username'
                                onChange={handleInputs}
                                value={inputs.username}
                                className='w-full px-3 py-2 rounded-md border border-gray-700 bg-transparent text-white focus:outline-none focus:ring'
                                required
                                placeholder='johndoe'
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className='text-sm font-medium text-gray-300 block'>
                                Password
                            </label>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                onChange={handleInputs}
                                value={inputs.password}
                                className='w-full px-3 py-2 rounded-md border border-gray-700 bg-transparent text-white focus:outline-none focus:ring'
                                required
                                placeholder='password'
                            />
                        </div>
                        <button
                            className='w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700'
                        >
                            Log In
                        </button>
                    </form>
                    <div className='text-center text-gray-400'>
                        Don't have an account?{' '}
                        <Link to='/signup' className='text-red-500 hover:underline'>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;

import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const [displayNav, setDisplayNav] = useState(false);

    function handleNav() {
        setDisplayNav(_ => !_);
    }

    return (
        <div className='fixed w-full h-20 shadow-lg shadow-main-500 z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>

                <div>
                    <ul className='hidden md:flex'>
                        <Link to='/'>
                            <li className='ml-10 test-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link to='/'>
                            <li className='ml-10 test-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link to='/'>
                            <li className='ml-10 test-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                        <Link to='/'>
                            <li className='ml-10 test-sm uppercase hover:border-b'>Something</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}></AiOutlineMenu>
                </div>
            </div>

            <div className={displayNav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''} >
                <div className={displayNav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-blue-100 p-10 ease-out duration-300'
                    : 'fixed left-[-100%] p-10 ease-out duration-300'} >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <div></div>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose></AiOutlineClose>
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Making code come alive</p>
                        </div>
                        <div>
                            <ul>
                                <Link to="/">
                                    <li className='py-4 text-sm'>Home</li>
                                </Link>
                                <Link to="/">
                                    <li className='py-4 text-sm'>Home</li>
                                </Link>
                                <Link to="/">
                                    <li className='py-4 text-sm'>Home</li>
                                </Link>
                                <Link to="/">
                                    <li className='py-4 text-sm'>Home</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                                    <FaLinkedin />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                                    <FaLinkedin />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

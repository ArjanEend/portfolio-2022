import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { SocialButtons } from './SocialButtons'

export default function Contact() {
    return (
        <div id='contact' className='portfolio-content'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-strong-emphasis'>Contact</p>
                <h2 className='py-4 text-s'>Get in touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' alt=""></img>
                            </div>
                            <div>
                                <h2 className='py-2'>Name here</h2>
                                <p>Full Stack Developer</p>
                                <p className='py-4'>Contact me here, maybe? :D</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <SocialButtons />
                            </div>
                        </div>
                    </div>

                    {/* left */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-500 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-4'>Name</label>
                                        <input className='border-2 p-3 border-gray-800' type="text" name="" id="" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-4'>Phone Number</label>
                                        <input className='border-2 p-3 border-gray-800' type="text" name="" id="" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-4'>Email</label>
                                    <input className='border-2 p-3 border-gray-800' type="text" name="" id="" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-4'>Subject</label>
                                    <input className='border-2 p-3 border-gray-800' type="text" name="" id="" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-4'>Message</label>
                                    <textarea className='border-2 p-3 border-gray-800' rows={5} name="" id="" />
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send!</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <a href='/'>
                        <div>
                            <HiOutlineChevronDoubleUp />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
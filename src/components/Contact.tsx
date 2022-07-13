import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { HashLink } from 'react-router-hash-link'
import { SocialButtons } from './SocialButtons'

export default function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
    };

    return (
        <div id='contact' className='portfolio-content'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-strong-emphasis'>Contact</p>
                <h2 className='py-4 text-s'>Get in touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full border-8 border-main p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' alt=""></img>
                            </div>
                            <div>
                                <h2 className='py-2'>Arjan Cordia</h2>
                                <p>Full Stack Developer</p>
                                <p className='py-4'>You can contact me for Game Development or Web3 projects.</p>
                            </div>
                            <img
                                className='border-4 border-strong-emphasis h-auto'
                                src={process.env.PUBLIC_URL + '/assets/contact.png'}
                                alt='/'
                            />
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <SocialButtons />
                            </div>
                        </div>
                    </div>

                    {/* left */}
                    <div className='col-span-3 w-full h-auto border-8 border-main lg:p-4'>
                        <div className='p-4'>
                            <form
                                onSubmit={handleSubmit}
                                action='https://getform.io/f/2b526499-1abd-4ff6-beb1-6c248170ef9e'
                                method='POST'
                            >
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-4'>Name</label>
                                        <input value={name} onChange={e => setName(e.target.value)} className='border-4 p-3 border-gray-800' type="text" name="name" id="name" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-4'>Phone Number</label>
                                        <input value={phone} onChange={e => setPhone(e.target.value)} className='border-4 p-3 border-gray-800' type="text" name="phone" id="phone" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-4'>Email</label>
                                    <input value={email} onChange={e => setEmail(e.target.value)} className='border-4 p-3 border-gray-800' type="email" name="email" id="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-4'>Subject</label>
                                    <input value={subject} onChange={e => setSubject(e.target.value)} className='border-4 p-3 border-gray-800' type="text" name="subject" id="subject" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-4'>Message</label>
                                    <textarea value={message} onChange={e => setMessage(e.target.value)} className='border-4 p-3 border-gray-800' rows={5} name="message" id="message" />
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send!</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <HashLink smooth to={"#top"}>
                        <div>
                            <HiOutlineChevronDoubleUp />
                        </div>
                    </HashLink>
                </div>
            </div>
        </div>
    )
}

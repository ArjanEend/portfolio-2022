import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Link, useMatch, useNavigate, useRoutes } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import { SocialButtons } from './SocialButtons';


export interface HeaderLink {
    path: string, label: string
}

export default function Navbar({ links }: { links: HeaderLink[] }) {
    const [displayNav, setDisplayNav] = useState(false);
    const [navColor, setNavColor] = useState("bg");
    const [navLinkColor, setNavLinkColor] = useState("bg");
    const match = useMatch("projects/*");

    function handleNav() {
        setDisplayNav(_ => !_);
    }

    useEffect(() => {
        if (match) {
            setNavColor("black/0");
            setNavLinkColor("bg");
            return;
        }
        setNavColor("bg-300");
        setNavLinkColor("black");
    }, [match]);

    const topClassName = useMemo(() =>
        `fixed bg-${navColor} w-full h-20 border-strong border-solid border-${match ? 0 : 4} border-t-0 border-r-0 border-l-0 z-[100]`
        , [navColor, match]);

    return (
        <div className={topClassName}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    <ul className='hidden md:flex'>
                        {links.filter(l => !l.path.includes("projects/")).map(l => <HashLink smooth key={l.path} to={"/" + l.path}>
                            <li className={`ml-10 text-${navLinkColor} border-${navLinkColor} test-sm uppercase hover:border-b`}>{l.label}</li>
                        </HashLink>)}
                    </ul>
                </div>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu color={match ? "white" : "black"} size={25}></AiOutlineMenu>
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
                            <p className='w-[85%] md:w-[90%] py-4'>Bring code to life</p>
                        </div>
                        <div>
                            <ul>

                                {links.filter(l => !l.path.includes("projects/")).map(l => <HashLink smooth key={l.path} to={l.path}>
                                    <li onClick={() => setDisplayNav(false)} className='py-4 text-sm'>{l.label}</li>
                                </HashLink>)}
                            </ul>
                        </div>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
                            <SocialButtons />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

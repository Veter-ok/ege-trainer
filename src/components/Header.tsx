'use client'
import Link from "next/link"
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="div">
            <div className="flex flex-row w-screen m-0 px-6 py-8">
                <h1 className="basis-1/2 text-white text-2xl w-full sm:text-3xl">ЕГЭ тренажёр</h1>
                <ul className="flex basis-2/3">
                    <Link href="/" className="hidden md:block flex-initial text-center m-auto py-2 h-10 rounded-md bg-light hover:bg-secondary lg:w-44 md:w-32">Lorem</Link>
                    <Link href="/courses" className="hidden md:block flex-initial text-center m-auto py-2 h-10 rounded-md bg-light hover:bg-secondary lg:w-44 md:w-32">Тренажёры</Link>
                    <Link href="/login" className="hidden md:block flex-initial text-center m-auto py-2 h-10 rounded-md bg-light lg:w-44 md:w-32">Войти</Link>
                </ul>
                <button onClick={handleClick}  className="flex flex-col justify-center items-center md:hidden">
                    <span className={`bg-white block transition-all duration-300 ease-out 
                                    h-0.5 w-6 rounded-sm ${isOpen ? 
                                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                                    }`} >
                    </span>
                    <span className={`bg-white block transition-all duration-300 ease-out 
                                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                                    'opacity-0' : 'opacity-100'
                                    }`} >
                    </span>
                    <span className={`bg-white block transition-all duration-300 ease-out 
                                    h-0.5 w-6 rounded-sm ${isOpen ? 
                                    '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                                    }`}>
                    </span>  
                </button>
            </div>
            <div className={`flex ${isOpen ? "flex" : "hidden"} w-full px-10 mx-auto justify-center gap-5 md:hidden`}>
                <Link href="/" className="w-full text-center m-auto py-2 h-10 rounded-md bg-light">Lorem</Link>
                <Link href="/courses" className="w-full  text-center m-auto py-2 h-10 rounded-md bg-light">Тренажёры</Link>
                <Link href="/login" className="w-full  text-center m-auto py-2 h-10 rounded-md bg-light">Войти</Link>
            </div>
        </div>
    )
}

export default Header
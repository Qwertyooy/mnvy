import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React,{useEffect, useState} from 'react';
const Navbar = () => {

    const [showMobile,setshowMobile] = useState(false);

    useEffect(()=>{
        if(showMobile){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
        return()=>{
            document.body.style.overflow = 'auto';
        }
    })


    return (
    <nav>
        <div className='absolute top-0 left-0 w-full z-10 bg-transparent h-14'>
            <div className='container mx-auto flex justify-between items-center py-3 px-10 '>
                 <a href="/" className="font-bold text-2xl text-white">MVY</a>
                <ul className='lg:flex lg:items-center lg:w-auto hidden'>
                    <a href="/" className="cursor-pointer pr-9 text-white font-medium ease-in-out hover:text-red-300 transition delay-100 duration-100">Home</a>
                    <a href="/" className="cursor-pointer pr-9 text-white font-medium">About Me</a>
                    <a href="/" className="cursor-pointer pr-9 text-white font-medium">Projects</a>

                    <button className="text-white font-medium border rounded px-3 transition relative ease-in-out delay:100 hover:border-none hover:bg-black ">Testimoni</button>
                </ul>
                
                <div className="flex gap-6 text-white">
                    <button className='flex  right-6 w-8 h-8 ease-in-out border hover:bg-black hover:text-white items-center justify-center transition delay-200 duration-200  rounded'><FontAwesomeIcon icon={faMoon} className='size-5 '/></button>
                    <button className='hidden'><FontAwesomeIcon icon={faSun} className='size-5 '/></button>
                     <div className="flex lg:hidden right-6 w-8 h-8 ease-in-out border hover:bg-black hover:text-white items-center justify-center transition delay-200 duration-200  rounded  ">
                     <button onClick={() => setshowMobile(true)} className=' lg:w-auto block'><FontAwesomeIcon icon={faBars} className='size-6 '/></button>
                </div>
                </div>
               
            </div>
        </div>
            {/* mobile mode */}
        <div className={`lg:hidden ${showMobile ? 'fixed w-full' : 'w-0 h-0'} right-0 top-0 bottom-0 overflow-hidden transition-all bg-white z-20`}>
            
            <div className='right-0 flex justify-end p-6'>
            <button onClick={()=>{setshowMobile(false)}}><FontAwesomeIcon icon={faXmark} className='size-6 '/></button>
            </div>
            
            <ul className='flex flex-col text-center items-center justify-center pt-40'>
                <a href="/" className='px-4 py-2 rounded inline-block '>Home</a>
                <a href="/" className='px-4 py-2 rounded inline-block pt-10'>About Me</a>
                <a href="/" className='px-4 py-2 rounded inline-block pt-10'>Projects</a>
                <div className='pt-10'>
                <button className="text-black bg-stone-500/15 font-medium border rounded-full px-20 transition relative ease-in-out delay:100 hover:border-none hover:bg-black hover:text-white">Testimoni</button>
                </div>

                
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;


    

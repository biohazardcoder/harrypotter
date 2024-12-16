import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    const headerData = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "About",
            url: "/"
        },
        {
            title: "News",
            url: "/"
        },
        {
            title: "Shop",
            url: "/"
        },
        {
            title: "Discover",
            url: "/"
        }
    ];
    return (
        <div className='w-full fixed text-white z-20 h-[80px] bg-[#000000ba] flex items-center px-[5%] justify-between'>
            <div className='flex font-semibold items-center text-2xl font-[cursive]'>
                <Link to={"/"} className='flex items-center'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Hogwarts-Crest.png" alt="logo" className='w-[50px] h-[50px]' />
                    <img src="https://i.pinimg.com/originals/8b/b3/99/8bb3991dca3078f26bab8d07770f8d33.png" alt="logo" className='w-[200px] mt-4 h-[100px]' />
                </Link>
            </div>
            <ul className='flex gap-[30px] font-semibold'>
                {
                    headerData.map((item, index) => (
                        <li key={index}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
            <button className='py-1 px-4 rounded-md bg-[#AE0003] hover:bg-[#fe3c40] transition-colors duration-500'>Login</button>
        </div>
    )
}

export default Header
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET&apos;S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I&apos;m <span className='text-[#5651e5]'> Mohamed</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Full-Stack Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I&apos;m a full-stack web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building responsive fullstack web applications while learning web3-blockchain technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a
                            href='https://www.linkedin.com/in/mohamed-omar-moussa-61a6131b4/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a
                            href='https://github.com/Mohamed90-stack'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub />
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main

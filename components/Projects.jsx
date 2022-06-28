import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import restaurantImg from '../public/assets/projects/restaurant.jpg'
import CryptoImg from '../public/assets/projects/Crypto.jpg'
import ProjectItem from './ProjectItem'
import HeadphonesImg from '../public/assets/projects/Headphones.jpg'
import RealestateImg from '../public/assets/projects/Realestate.jpg'
import BlockchainappImg from '../public/assets/projects/Blockchainapp.jpg'
import ShareappImg from '../public/assets/projects/Shareapp.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem title='Restaurant Website' backgroundImg={restaurantImg} projectUrl='/restaurant' />
          <ProjectItem title='Crypto Trakker' backgroundImg={CryptoImg} projectUrl='/Crypto' />
          <ProjectItem title='Mohamed Headphones' backgroundImg={HeadphonesImg} projectUrl='/Headphones' />
          <ProjectItem title='Real Estate' backgroundImg={RealestateImg} projectUrl='/Realestate' />
          <ProjectItem title='Blockchain App' backgroundImg={BlockchainappImg} projectUrl='/Blockchainapp' />
          <ProjectItem title='Share App' backgroundImg={ShareappImg} projectUrl='/Shareapp' />
        </div>
      </div>
    </div>
  )
}

export default Projects

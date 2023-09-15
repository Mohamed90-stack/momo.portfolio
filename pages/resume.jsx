import React from 'react';
import Head from 'next/head'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Resume = () => {
  return (
    <>
      <Head>
        <title>Mohamed Omar | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2> 
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Mohamed Omar Moussa</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/mohamed-omar-moussa-61a6131b4/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a href='https://github.com/Mohamed90-stack' target='_blank' rel='noreferrer'>
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <p>
            Proven Leadership <span className='px-1'>|</span> Web Development{' '}
            <span className='px-1'>|</span> Complex Problem Solving
          </p>
        </div>
        <p className='text-center'>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS<span className='px-2'>|</span>JavaScript / JavaScript Libraries
            <span className='px-2'>|</span>Web Performance Optimization(WPO)
            <span className='px-2'>|</span>SCRUM and Agile Methodology
            <span className='px-2'>|</span>MYSQL
            <span className='px-2'>|</span> DOM Manipulation
            <span className='px-2'>|</span> Front End Search Engine Optimization
            <span className='px-2'>|</span> Website or Application Implementation
            <span className='px-2'>|</span> UX/UI Assessment
            <span className='px-2'>|</span> Version Control
            <span className='px-2'>|</span> Sanity
            <span className='px-2'>|</span> Solidity
            <span className='px-2'>|</span> Smart Contract |
          </p>
          <p className='py-2'>
          <span className='font-bold'>Cloud Computing and Hosting Services</span>
            <span className='px-2'>|</span>Vercel
            <span className='px-2'>|</span>Netlify
            <span className='px-2'>|</span>Heroku
            <span className='px-2'>|</span>Amazon Web Services
            <span className='px-2'>|</span>Firebase |
          </p>
        </div>

        {/* Experience */}
        <div className='py-4'>
          <h5 className='text-center underline text-[18px] py-4'>
            Experience
          </h5>
          <p className='italic'>
            <span className='font-bold'>SHARE APP</span>
            <span className='px-2'>|</span><a
              href='https://shareappmo.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-2 py-2 mt-2 mr-2'>Demo</button>
            </a>
          </p>
          <p className='py-1 italic'>This app is</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              With all advanced Social Media features, such as Google Authentication, 
            </li>
            <li>
              Create, edit, delete and save posts, like and comment on other people&apos;s posts,
            </li>
            <li>
              Search and filter images and much more,
            </li>
            <li>
              By using Sanity and its platform to structure content and manage text, images, and all other data using APIs.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold'>REAL ESTATE APP</span>
            <span className='px-2'>|</span><a
              href='https://mo-realestate.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-2 py-2 mt-2 mr-2'>Demo</button>
            </a>
          </p>
          <p className='py-1 italic'>Real Estate Application is based</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              On rental homes and for-sale properties,
            </li>
            <li>
              Advanced property filtering, property details page with an image carousel, and much more,
            </li>
            <li>
              Static generation, and serve-side rendering,
            </li>
            <li>
              Creating a User Interface using # ChakraUI,
            </li>
            <li>
              And most importantly fetching data from unlimited sources using RapidAPI.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>
              LANDING PAGE
            </span>
            <span className='px-2'>|</span><a
              href='https://restaurantreactapp.netlify.app/#home'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-2 py-2 mt-2 mr-2'>Demo</button>
            </a>
          </p>
          <p className='py-1 italic'>Modern UI/UX Landing page based</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              On how to transform a #Figma design into a fully functioning website, 
            </li>
            <li>
              From soft and pleasant animations to complex gradients,
            </li>
            <li>
              Perfectly placed media queries for satisfactory responsiveness covering almost all devices.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>
              ECOMMERCE WEBSITE
            </span>
            <span className='px-2'>|</span><a
              href='https://ecommerce-stripe-five.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-2 py-2 mt-2 mr-2'>Demo</button>
            </a>
          </p>
          <p className='py-1 italic'>Modern Full Stack ECOMMERCE Application with Stripe</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Includes modern design and animations, 
            </li>
            <li>
              The ability to add and edit products on the go using a Sanity,
            </li>
            <li>
              And most importantly, the complete integration with Stripe so you can cover real payments, shipping rates, and the entire checkout process.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>
              CRYPTOCURRENCY TRACKER APP
            </span>
            <span className='px-2'>|</span><a
              href='https://crypto-trakker.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-2 py-2 mt-2 mr-2'>Demo</button>
            </a>
          </p>
          <p className='py-1 italic'>It is a Cryptocurrency Tracker App based</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              On # MaterialUI and # ChartJS with full responsive functionality, 
            </li>
            <li>
              Context API is used to manage the state,
            </li>
            <li>
              And Coin Gecko API for the backend.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>
              BLOCKCHAIN APPLICATION
            </span>
            <span className='px-2'>|</span><a
              href='https://lryptocurrencyapp.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-2 py-2 mt-2 mr-2'>Demo</button>
            </a>
          </p>
          <p className='py-1 italic'>Web3 React Solidity Blockchain Application is based</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              On a stunning design, connected to the Blockchain,  
            </li>
            <li>
              Metamask pairing, interaction with Smart Contracts, 
            </li>
            <li>
              Sending Ethereum through the Blockchain network, writing Solidity code, and much more.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-4'>
          <h5 className='text-center underline text-[18px] py-4'>
            Education
          </h5>
          <p className='italic'>
            <span className='font-bold'>FULL-STACK DEVELOPER</span>
          </p>
          <p className='py-1 italic'>Le Wagon / 2023</p>
          <p className='italic'>
            <span className='font-bold'>FRONT-END DEVELOPER</span>
          </p>
          <p className='py-1 italic'>Openclassrooms / 2022</p>
        </div>
      </div>
    </>
  );
};

export default Resume;

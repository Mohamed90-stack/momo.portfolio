import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {

  return (
  <div>
    <Head>
      <title>Mohamed Omar | Front-End Developer</title>
      <link rel="icon" href="/assets/navLogo.png" />
    </Head>
    <Main/> 
    <About/>
    <Skills />
    <Projects/>
    <Contact />
  
    

      
  </div>
 )
}

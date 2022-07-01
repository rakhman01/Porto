import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import AboutMe from '../components/AboutMe'
import CardHero from '../components/CardHero'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Meter from '../components/Meter'
import MySkils from '../components/MySkils'
import { MyWorks } from '../components/MyWorks'


const Home: NextPage = () => {

  return (
    <div>
      <div className='w-full h-auto flex flex-col items-center justify-between p-4 bg-background'>
        <CardHero></CardHero>
        <Meter></Meter>
        <AboutMe></AboutMe>
        <MySkils></MySkils>
        <Experience></Experience>
        <MyWorks></MyWorks>
      </div>
    </div>
  )
}

export default Home

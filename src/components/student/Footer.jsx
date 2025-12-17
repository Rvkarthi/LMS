import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px:0 justigy-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo_dark} alt="logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facere placeat soluta distinctio sed libero, suscipit fugiat aliquid? Culpa odit dolorem consequatur beatae est quibusdam nam dicta voluptatum? Autem at doloribus, distinctio voluptatibus quasi, odit quo, repellendus molestias hic omnis nostrum quam minima sapiente! Laborum quisquam cumque illo exercitationem consequatur.</p>
      </div>
      <div></div>
      <div></div>
      </div>
      <p className='py-4 text-center text-sm text-white/60'>Copyright 2025 @ Karthikrishna. All rights reserved.</p>
    </footer>
  )
}

export default Footer
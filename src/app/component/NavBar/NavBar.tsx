'use client';
import { missingProperties } from '@/lib/utils'
import { Button, IconButton } from '@material-tailwind/react'
import Link from 'next/link';
import React from 'react'
import IconLogo from '../icons/IconLogo';

export default function NavBar({ open, onClose , toggleDrawer}: { open: boolean, onClose: () => void, toggleDrawer: () => void }) {
  return (
    <div className='w-full flex flex-col p-5 gap-5'>
      <TopNav  toggleDrawer={toggleDrawer}/>
      <BottomNav open={open} onClose={onClose} />
    </div>
  )
}


function TopNav({toggleDrawer}: {toggleDrawer: () => void}) {
  return (
    <div className='flex w-full justify-between'>
      <div className='flex justify-between items-center gap-5'>
        <Button  {...missingProperties} className="bg-gray-light text-gray-main flex items-center px-3 gap-5 rounded-full buttonClasses" >
          <i className="fas fa-globe" />
          <p>EN</p>
          <i className="fas fa-chevron-down" />
        </Button>
        <Button  {...missingProperties} className="bg-gray-light hidden sm:flex text-gray-main  items-center px-3 gap-5 rounded-full buttonClasses" >
          <i className="far  fa-comments" />
          <p> CHAT TO SALES</p>
        </Button>
        <Button  {...missingProperties} className="bg-gray-light text-gray-main hidden sm:flex items-center px-3 gap-5 rounded-full buttonClasses" >
          <i className="far  fa-life-ring" />
          <p>SUPPORT</p>
        </Button>
      </div>
      <div className='flex items-center justify-between gap-5'>
        <div className="bg-gray-light text-gray-main  items-center px-3  hidden sm:flex  rounded-full divClasses" >
          <IconButton {...missingProperties} className="bg-transparent buttonClasses hover:text-primary-main text-gray-main" ><i className="fas  fa-display" /></IconButton>
          <IconButton {...missingProperties}  className="bg-transparent buttonClasses hover:text-primary-main text-gray-main" ><i className="far  fa-sun" /></IconButton>
          <IconButton  {...missingProperties}  className="bg-transparent buttonClasses hover:text-primary-main text-gray-main" > <i className="far  fa-moon" /></IconButton>
        </div>
        <Button  {...missingProperties} className="bg-gray-light hidden sm:flex text-gray-main  items-center px-3 gap-5 rounded-full buttonClasses" >
          <i className="far  fa-user" />
          <p>LOGIN</p>
        </Button>
      </div>
        <div className='bg-gray-light text-gray-main  items-center sm:hidden block  rounded-full divClasses'>
        <IconButton className='bg-transparent buttonClasses hover:text-primary-main text-gray-main' {...missingProperties} onClick={toggleDrawer}>
        <i className="fa-solid fa-bars"></i>
        </IconButton>
        </div>
        
    </div>
  )
}

function BottomNav({ open, onClose }: { open: boolean, onClose: () => void }) {
  const menu = [
    "Features",
    "Industries",
    "Pricing",
    "Resources"
  ]
  return (
    <div className=' bg-primary-light flex flex-col sm:flex-row justify-between items-center py-5 md:py-5 gap-5 lg:py-10 rounded-full px-2 md:px-5 lg:px-10   md:mx-10 lg:mx-20'>
      <div className='flex items-center  gap-5 '>
        <Link href={"/"}>
          <IconLogo />
        </Link>
      <div className='flex flex-wrap gap-5'>

      {
          menu.map(item => (
            <Link key={item} href={"/"} className="text-primary-dark font-medium hidden sm:block text-xl hover:text-primary-main">
              {
                item
              }
            </Link>
          ))
        }
      </div>
      </div>
      <div className='flex items-center justify-between gap-5'>
        <Button onClick={onClose} {...missingProperties} className={"bg-primary-main rounded-full text-white buttonClasses capitalize"}>
          Schedule a call
        </Button>
        <Button {...missingProperties} className={"bg-primary-light border border-primary-main text-primary-text rounded-full  buttonClasses capitalize"}>
          Free trial
        </Button>
      </div>
    </div>
  )
}
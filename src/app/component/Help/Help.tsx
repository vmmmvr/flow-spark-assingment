import { missingProperties } from '@/lib/utils'
import { Button } from '@material-tailwind/react'
import React from 'react'

export default function Help({ onClose }: {  onClose: () => void }) {
  return (
    <div className='w-full flex justify-center flex-col items-center gap-10 px-5 md:px-10 text-center mt-24'>
        <h1 className='text-6xl'>
        Want to see how we can help?
        </h1>
       <div className='max-w-[1000px] w-full text-center'>
       <p className='text-2xl'>
        Ready to transform your marketing? Book a demo or start your free trial  today and see firsthand how we can make your marketing efforts more  effective and enjoyable!
        </p>
       </div>
       <div className='flex items-center justify-between gap-5'>
          <Button onClick={onClose} size='lg' {...missingProperties} className={"bg-primary-main rounded-full text-white buttonClasses capitalize"}>
          Schedule a call
          </Button>
          <Button size='lg'  {...missingProperties} className={"bg-primary-light border border-primary-main text-primary-text rounded-full  buttonClasses capitalize"}>
          Start Free trial
          </Button>
        </div>
        <p className='text-blue-gray-200'>Free 14-day trial. Cancel anytime.</p>
    </div>
  )
}

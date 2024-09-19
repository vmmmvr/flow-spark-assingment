import { missingProperties } from '@/lib/utils'
import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'
import IconLogo from '../icons/IconLogo'

export default function Footer({ onClose }: {onClose: () => void }) {
    const items = {
        Product: [
            "Overview",
            "Key Features",
            "Integrations",
            "AI-led Insights",
        ],
        Academy: [
            "Training programme",
            "Webinars",
            "Education blog",
            "FAQs",
        ],
        Company: [
            "Partnerships",
            "Media + Press",
            "Contact Us",
            "About",
        ],
    }
    return (
        <div className='flex flex-col items-center w-full bg-gray-dark lg:px-40 md:px-10 px-5 py-20 gap-20 mt-24'>
            <div className='flex flex-col sm:flex-row gap-10 justify-around w-full text-white '>
                <div className='w-3/4   flex flex-col sm:flex-row gap-5 md:gap-16 justify-center '>
                    <div className='flex flex-col items-start  md:items-center'>
                        <span className='font-medium text-xl my-3'>Product</span>
                        {
                            items.Product.map(item => (
                                <Link key={item} className='font-thin my-1.5' href={"#"}>   <span key={item}> {item} </span></Link>
                            ))
                        }
                    </div>
                    <div className='flex flex-col items-start  md:items-center'>
                        <span className='font-medium text-xl my-3'>Academy</span>
                        {
                            items.Academy.map(item => (
                                <Link key={item} className='font-thin my-1.5' href={"#"}>     <span key={item}> {item} </span></Link>
                            ))
                        }
                    </div>
                    <div>
                        <div className='flex flex-col items-start  md:items-center'>
                            <span className='font-medium text-xl my-3'>Support</span>
                            <Link className='font-thin my-1.5' href={"#"}>     <span>Support Center</span></Link>
                            <Link className='font-thin my-1.5' href={"#"}>    <span>Account login</span></Link>
                            <Button onClick={onClose} size='lg' {...missingProperties} className={"bg-primary-main rounded-full my-1.5 text-white buttonClasses capitalize"}>
                                Schedule a call
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full sm:w-1/4 justify-center items-start  md:items-center'>
                    <span className='font-medium text-xl my-3'>Company</span>
                    {
                        items.Company.map(item => (
                            <Link key={item} className='font-thin my-1.5' href={"#"}>   <span key={item}> {item} </span></Link>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col items-center gap-6'>
                <div className='flex flex-col gap-3 items-center'>
                    <Link href={"/"}>
                        <IconLogo />
                    </Link>
                    <div className='flex gap-5 text-primary-main'>
                        <Link href={"/"}> <i className="fa-brands  fa-x-twitter "></i> </Link>
                        <Link href={"/"}>   <i className="fa-brands fa-instagram"></i> </Link>
                        <Link href={"/"}>  <i className="fa-brands fa-linkedin"></i> </Link>
                        <Link href={"/"}>  <i className="fa-brands fa-youtube"></i> </Link>
                        <Link href={"/"}>   <i className="fa-brands fa-square-facebook"></i> </Link>
                    </div>
                </div>
                <div className='flex gap-6 text-white'>
                    <Link href={"/"}> <span>Terms of service</span>  </Link>
                    <Link href={"/"}> <span>Privacy policy</span>  </Link>
                </div>
                <span className='text-white'>© 2024 FlowSpark Digital LLC </span>
            </div>
        </div>
    )
}

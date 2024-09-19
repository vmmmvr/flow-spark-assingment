import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { missingProperties } from "@/lib/utils";
import Link from "next/link";
import IconLogo from "../icons/IconLogo";

export function CustomDrawer({ open, toggle }: { open: boolean, toggle: () => void }) {

    const menu = [
        "Features",
        "Industries",
        "Pricing",
        "Resources"
    ]

    return (
        <React.Fragment>
            <Drawer open={open} onClose={toggle} className="p-4 flex flex-col justify-between">
                <div className="flex flex-col">
                    <div className="mb-6 flex items-center justify-between">
                        <Link href={"/"}>
                            <IconLogo />
                        </Link>
                        <IconButton variant="text" color="blue-gray" onClick={toggle}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </div>
                    <div className='flex flex-col  bg-primary-light p-5 rounded-3xl gap-5'>

                        {
                            menu.map(item => (
                                <Link key={item} href={"/"} className="text-primary-dark font-medium  text-xl hover:text-primary-main">
                                    {
                                        item
                                    }
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <div className='flex items-center justify-between gap-5 '>
                        <Button  {...missingProperties} className="bg-gray-light flex-1 w-full flex text-gray-main  items-center px-3 gap-5 rounded-full buttonClasses" >
                            <i className="far  fa-comments" />
                            <p> CHAT TO SALES</p>
                        </Button>
                        <Button  {...missingProperties} className="bg-gray-light flex-0 text-gray-main flex items-center px-3 gap-5 rounded-full buttonClasses" >
                            <i className="far  fa-life-ring" />
                            <p>SUPPORT</p>
                        </Button>
                    </div>
                    <div className='flex items-center justify-between gap-5'>
                        <div className="bg-gray-light text-gray-main  items-center px-3  flex  rounded-full divClasses" >
                            <IconButton {...missingProperties} className="bg-transparent buttonClasses hover:text-primary-main text-gray-main" ><i className="fas  fa-display" /></IconButton>
                            <IconButton {...missingProperties} className="bg-transparent buttonClasses hover:text-primary-main text-gray-main" ><i className="far  fa-sun" /></IconButton>
                            <IconButton  {...missingProperties} className="bg-transparent buttonClasses hover:text-primary-main text-gray-main" > <i className="far  fa-moon" /></IconButton>
                        </div>
                        <Button  {...missingProperties} className="bg-gray-light flex text-gray-main  items-center px-3 gap-5 rounded-full buttonClasses" >
                            <i className="far  fa-user" />
                            <p>LOGIN</p>
                        </Button>
                    </div>
                </div>
            </Drawer>
        </React.Fragment>
    );
}
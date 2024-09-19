'use client';
import { missingProperties, shuffleArray } from '@/lib/utils'
import { Button, Carousel, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'

export default function Featrues() {

    const [selectedCarousel, setselectedCarousel] = useState(1);
    const [randomImges, setRandomImages] = useState(["https://picsum.photos/id/231/1280/720",
        "https://picsum.photos/id/237/1280/720",
        "https://picsum.photos/id/234/1280/720",
        "https://picsum.photos/id/42/1280/720",
        "https://picsum.photos/id/542/1280/720",
        "https://picsum.photos/id/127/1280/720",
        "https://picsum.photos/id/432/1280/720",
        "https://picsum.photos/id/321/1280/720",
        "https://picsum.photos/id/555/1280/720",
        "https://picsum.photos/id/671/1280/720",
        "https://picsum.photos/id/198/1280/720",
        "https://picsum.photos/id/618/1280/720",
    ]);

    const items = [
        {
            index: 1,
            title: "Effortless interface",
            desc: "Simplify your marketing"
        },
        {
            index: 2,
            title: "Seamless connections",
            desc: "Total sync with your tools"
        },
        {
            index: 3,
            title: "Tailored experience",
            desc: "Customise with ease"
        },
        {
            index: 4,
            title: "All-in-One platform",
            desc: "All-in-One platform"
        },
        {
            index: 5,
            title: "Smart insights",
            desc: "AI-powered marketing intelligence"
        },
    ]



    return (
        <div className='w-full lg:px-40 md:px-10 px-5 mt-24'>
            <div className='bg-primary-light  px-5 md:px-10 py-20 gap-10 flex md:flex-row flex-col rounded-3xl'>

                <div className='flex-1 w-full'>
                    <h1  {...missingProperties} className="font-medium text-4xl">
                        FlowSpark features
                    </h1>
                    {
                        items.map((item) => (<div key={item.title}
                            onClick={() => (setRandomImages(shuffleArray(randomImges)), setselectedCarousel(item.index))}
                            className={`text-gray-text flex flex-col my-5 py-2 border-l-4 px-3 hover:cursor-pointer
                                ${selectedCarousel === item.index ? "border-primary-main" : "border-primary-main border-opacity-20"} `}>
                            <span className='font-semibold text-lg'>{item.title}</span>
                            <span className="">{item.desc}</span>
                        </div>))
                    }

                   <div className='flex flex-col gap-5 items-start'>  
                   <p>
                        Experience simplicity with our user-friendly interface, designed for  effortless navigation. Transform complex tasks into simple actions,  enhancing productivity and strategic focus. Enjoy a seamless experience  that drives results and optimizes your marketing efforts efficiently.
                    </p>
                    <Button {...missingProperties} className={"bg-primary-light border border-primary-main text-primary-text rounded-full  buttonClasses capitalize"}>
                        See more features
                    </Button>
                   </div>
                </div>
                <Carousel
                    nextArrow={(args: {
                        loop: boolean;
                        handlePrev: () => void;
                        activeIndex: number;
                        firstIndex: boolean;
                    }) => (
                        <>

                        </>
                    )}
                    prevArrow={(args: {
                        loop: boolean;
                        handlePrev: () => void;
                        activeIndex: number;
                        firstIndex: boolean;
                    }) => (
                        <>

                        </>
                    )}
                    {...missingProperties}
                    className="rounded-xl flex-1 w-full lg:w-[550px] h-[550px]"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4  items-center">
                            <IconButton onClick={() => (setActiveIndex(activeIndex === 0 ? length - 1 : activeIndex - 1))} className='mx-2 bg-transparent border-2 text-primary-main font-bold border-primary-main ' {...missingProperties}>
                                <i className="fas fa-arrow-left"></i>
                            </IconButton>
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer  transition-all content-[''] ${activeIndex === i || activeIndex > i ? "w-8 bg-primary-main" : "w-8 bg-primary-main bg-opacity-20"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                            <IconButton onClick={() => (setActiveIndex(activeIndex + 1 === length ? 0 : activeIndex + 1))} className='mx-2 bg-transparent border-2 text-primary-main font-bold border-primary-main'  {...missingProperties}>
                                <i className="fas fa-arrow-right"></i>
                            </IconButton>
                        </div>
                    )}
                >
                    {
                        randomImges.slice(0, 4).map((img, index) => (
                            <div key={index} className='w-full  flex items-center justify-center'>
                                <img
                                    src={img}
                                    alt="image 1"
                                    className="h-[460px] w-[460px]  object-cover rounded-2xl"
                                />
                            </div>
                        ))
                    }

                </Carousel>
            </div>
        </div>
    )
}

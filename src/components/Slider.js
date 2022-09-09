import React from 'react'
import { Carousel } from "flowbite-react";

function Slider() {
    return (
        <div className='w-3/4 items-center mt-8 mb-10'>

            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                        alt="..."
                    />
                </Carousel>
            </div>

        </div>
    )
}

export default Slider
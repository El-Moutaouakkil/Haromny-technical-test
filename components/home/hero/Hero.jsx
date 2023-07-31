import React from "react";
import Button from "../../ui/Button";
import Image from "next/image";

function Hero() {
    return (
        <section className='my-20 '>
            <h1 className='text-3xl font-semibold justify-center '>
                Where remote teams <br /> share knowledge and <br /> make
                decisions.
            </h1>
            <div className='mt-4 flex justify-center gap-x-3'>
                <div className='relative'>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='name@company.com'
                        className='border border-red-900 rounded rounded-full px-3 py-1.5 w-full placeholder:text-xs placeholder:font-semibold placeholder:italic'
                    />
                    <Button
                        text='Start for free'
                        primary
                        className='absolute right-0'
                    />
                </div>
                <Button text='Book a demo' outlined />
            </div>
            <Image
                src={"/assets/hero.png"}
                alt='here should be the hero image'
                className='mt-6'
                width={1920}
                height={400}
            />
        </section>
    );
}

export default Hero;

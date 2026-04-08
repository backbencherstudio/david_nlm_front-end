import Container from '@/app/_components/Container';
import CustomButton from '@/components/reusable/CustomButton'
import AppleIcon from '@/icons/AppleIcon';
import PlayStoreIcon from '@/icons/PlayStoreIcon';
import Image from 'next/image';
import React from 'react'

const HeroSection = () => {
    return (
        <Container>
            <div className='flex max-w-xl mx-auto  justify-center items-center gap-[.813rem]  mt-5 sm:mt-15  mb-1.5 '><p className='text-descriptionColor text-sm leading-[160%] text-center'>All in one app</p> <div className='w-[100px] h-[1px] bg-violet-500 ' /></div>
            <h1 className='text-blackColor text-[2rem] sm:text-[4rem] leading-[130%] font-semibold mb-4 text-center max-w-2xl mx-auto'>One App for All Your Everyday Needs</h1>
            <p className='text-descriptionColor text-lg leading-[160%] text-center mb-1 sm:mb-10 max-w-2xl mx-auto'>Discover, book, and manage trusted vendors across beauty, creative, event, and rental services — all from a single platform</p>

            <div className='flex items-center justify-center flex-col sm:flex-row sm:gap-4 gap-2 relative z-50'>
                <CustomButton className="gradient-bg px-6 py-2.5 rounded-full" >
                    <AppleIcon />
                    <div className='flex flex-col'>
                        <p className='text-xs leading-[160%] text-white'>Download on the</p>
                        <p className='text-lg leading-[130%] text-white'>App Store</p>
                    </div>
                </CustomButton>
                <CustomButton className='px-6 py-2.5 rounded-full bg-white  border-[0.031rem] border-[#E9E9EA]'>
                    <PlayStoreIcon />
                    <div className='flex flex-col'  >
                        <p className='text-xs leading-[160%] text-blackColor'   >Get it on</p>
                        <p>Google Play</p>
                    </div>
                </CustomButton>
            </div>

            <div className='flex items-center justify-center -mt-20'>
                <Image src={"/vendly_overlay.png"} alt="hero" width={950} height={100} />
            </div>

        </Container>
    )
}

export default HeroSection;
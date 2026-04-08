import Container from '@/app/_components/Container'
import React from 'react'
import AppleButton from '../buttons/AppleButton'
import PlaystoreButton from '../buttons/PlaystoreButton'
import Image from 'next/image'

const ZeroHassle = () => {
    return (
        <Container className='py-10 sm:py-30 '>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-25 items-center bg-bgColorOne rounded-2xl p-10 border border-borderColor'>
                <div className='w-full lg:w-1/2 space-y-9'>
                    <div className='space-y-4'>
                        <h2 className='text-4xl sm:text-[2.5rem] font-semibold text-blackColor leading-[130%] capitalize text-center md:text-left'>One Platform, Unlimited Services, and Zero Hassle</h2>
                        <p className='text-lg sm:text-base font-normal text-descriptionColor leading-[160%] max-w-full sm:max-w-[700px] text-center md:text-left'>One powerful platform that brings together endless services, designed to simplify your experience & eliminate every unnecessary step</p>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                        <AppleButton /><PlaystoreButton />
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>
                    <Image src="/zeroHassle.png" alt="zeroHassle" width={483} height={500} className='object-contain' />
                </div>
            </div>
        </Container>
    )
}

export default ZeroHassle
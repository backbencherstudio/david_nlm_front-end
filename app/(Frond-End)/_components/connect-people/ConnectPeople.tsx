import Container from '@/app/_components/Container'
import CustomButton from '@/components/reusable/CustomButton'
import Image from 'next/image'
import React from 'react'

const ConnectPeople = () => {
    return (
        <Container className="flex flex-col sm:flex-row items-center gap-10 sm:gap-20 pt-5 sm:pt-12.5 pb-10 sm:pb-30">

            {/* Left Content */}
            <div className="flex flex-col w-full sm:w-1/2">

                <h2 className="text-blackColor text-2xl sm:text-[2.5rem] leading-[130%] font-semibold capitalize mb-4 text-center sm:text-left">
                    We’re Building a Smarter Way to connect people
                </h2>

                <p className="text-descriptionColor text-sm sm:text-base leading-[160%] mb-6 sm:mb-9 text-center sm:text-left">
                    Our multi-business vendor app brings together Beauty & Personal Care, Creative & Media Services, Event Services, and Rentals under a single ecosystem. We make the entire process simple and transparent
                </p>

                <div className='w-full flex justify-center sm:justify-start'>
                    <CustomButton className="gradient-bg px-6 sm:px-9 py-3 rounded-full text-white mb-5 sm:mb-15 text-base sm:text-lg w-fit">
                        About Us
                    </CustomButton>
                </div>



                <div className="flex justify-between flex-wrap gap-6">

                    <div className="flex flex-col space-y-1">
                        <div className="h-[0.5px] w-full bg-[#D2D2D5] mb-3" />
                        <strong className="text-blackColor text-xl sm:text-[2.5rem] font-semibold">
                            17K+
                        </strong>
                        <span className="text-descriptionColor text-sm sm:text-base">
                            Total Customers
                        </span>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <div className="h-[0.5px] w-full bg-[#D2D2D5] mb-3" />
                        <strong className="text-blackColor text-xl sm:text-[2.5rem] font-semibold">
                            12K+
                        </strong>
                        <span className="text-descriptionColor text-sm sm:text-base">
                            Countries with active app users
                        </span>
                    </div>

                </div>
            </div>

            {/* Right Image */}
            <div className="w-full sm:w-1/2 flex justify-center">
                <Image
                    src="/connectPeople.png"
                    alt="connectPeople"
                    width={500}
                    height={500}
                    className="w-full max-w-[400px] sm:max-w-[500px] h-auto"
                />
            </div>

        </Container>
    )
}

export default ConnectPeople
import Container from '@/app/_components/Container'
import React from 'react'
import CustomerCard from './CustomerCard'

const customerData = [
    {
        id: "1",
        name: "ayana Dias",
        title: "Telehealth Consultant",
        image: "/customerOne.png",
        description: "“I booked the makeup artist, photographer, decorator, and even rented lighting equipment all from one place. The milestone payment system made easy” "
    },
    {
        id: "2",
        name: "James Hock",
        title: "CTO, Tech Company",
        image: "/customerTwo.png",
        description: "I had to arrange a birthday event at very short notice and didn’t know where to start. This app saved me. I quickly found a decorator, cake vendor & photographer"
    },
    {
        id: "3",
        name: "Amy Daina",
        title: "Marketing Director",
        image: "/customerThree.png",
        description: "“I needed a professional makeup artist and hairstylist for an engagement event, and I was worried about quality and reliability. I could see portfolios, and pricing clearly”"
    },

]

const Customers = () => {
    return (
        <Container className='space-y-10 sm:space-y-12 px-4  py-5 sm:py-30'>
            <div className='flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center'>
                <h2 className='text-4xl sm:text-[2.5rem] font-semibold text-blackColor leading-[130%] capitalize text-center '>Hear From Our Happy Customers</h2>
                <p className='text-lg sm:text-base font-normal text-descriptionColor leading-[160%] max-w-full sm:max-w-[700px] text-center '>Hear directly from our customers about their experiences with us. Real stories, honest feedback, and trusted results that show how we deliver value every time</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5'>
                {customerData.map((item) => (
                    <CustomerCard key={item.id} item={item} />
                ))}
            </div>
        </Container>
    )
}

export default Customers
"use client"
import GenericButton from '../auth/GenericButton'
import DataFilterBar from '../common/DataFilterBar'

const BookingsPageContent = () => {
    return (
        <div>

            <DataFilterBar onSearch={() => { }} allCategories allPayments />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-1 rounded-[1.25rem] mt-5 gap-1 bg-grayBg'>
                <GenericButton variant='primary' size='xl' rounded='2xl'>Event based booking</GenericButton>
                <GenericButton variant='plain' size='xl' rounded='2xl'>Home based booking</GenericButton>
                <GenericButton variant='plain' size='xl' rounded='2xl'>Location based booking</GenericButton>
            </div>

        </div>
    )
}

export default BookingsPageContent
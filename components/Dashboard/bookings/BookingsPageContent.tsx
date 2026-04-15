"use client"
import DynamicTable from '@/components/reusable/DynamicTable'
import GenericButton from '../auth/GenericButton'
import DataFilterBar from '../common/DataFilterBar'
import { bookingsData } from '@/data/booking'
import { BOOKING_COLUMNS } from './tableConfig'
import { useState } from 'react'
import { searchLocally } from '@/helper/searchLocally'
import { usePagination } from '@/hooks'

const BookingsPageContent = () => {
    const [filteredData, setFilteredData] = useState(bookingsData);
    const [filters, setFilters] = useState({ search: "" })
    const [itemsPerPage, setItemsPerPage] = useState(10);


    const { paginatedData, currentPage, totalPages, totalItems, goToPage } = usePagination({
        data: filteredData,
        itemsPerPage, resetDeps: [filters]
    })

    const applyFilters = (newFilters: any) => {
        const updated = { ...filters, ...newFilters }
        setFilters(updated)

        let data = [...bookingsData];
        if (updated.search) {
            data = searchLocally(updated.search, bookingsData)
        }

        setFilteredData(data)
    }
    return (
        <div>

            <DataFilterBar
                searchData={bookingsData}
                onSearch={(q) => applyFilters({ search: q })} allCategories allPayments />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-1 rounded-[1.25rem] mt-5 gap-1 bg-grayBg'>
                <GenericButton variant='primary' size='xl' rounded='2xl'>Event based booking</GenericButton>
                <GenericButton variant='plain' size='xl' rounded='2xl'>Home based booking</GenericButton>
                <GenericButton variant='plain' size='xl' rounded='2xl'>Location based booking</GenericButton>
            </div>
            <div className='mt-6'>
                <DynamicTable
                    border={false}
                    data={paginatedData}
                    columns={BOOKING_COLUMNS}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    onPageChange={goToPage}
                    totalpage={totalPages}
                    totalItems={totalItems}
                    setItemsPerPage={setItemsPerPage}
                    onView={() => { }} />
            </div>
        </div>
    )
}

export default BookingsPageContent
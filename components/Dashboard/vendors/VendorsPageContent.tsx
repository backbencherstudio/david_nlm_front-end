"use client"
import React from 'react'
import DynamicTable from '@/components/reusable/DynamicTable'
import { VENDOR_COLUMNS } from './tableConfig'
import { vendors } from '@/data/vendors'

const VendorsPageContent = () => {
    return (
        <div className='mt-5'> <DynamicTable columns={VENDOR_COLUMNS} data={vendors} currentPage={1} itemsPerPage={10} onPageChange={() => { }} totalpage={10} border={false} onView={() => { }} /></div>
    )
}

export default VendorsPageContent
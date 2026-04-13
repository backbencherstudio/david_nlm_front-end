import DataFilterBar from '@/components/Dashboard/common/DataFilterBar'
import VendorsPageContent from '@/components/Dashboard/vendors/VendorsPageContent'
import React from 'react'


const VendorsPage = () => {
    return (
        <div >
            <DataFilterBar allCategories />
           <VendorsPageContent/>
        </div>
    )
}

export default VendorsPage
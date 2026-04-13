'use client'

import DataFilterBar from "../common/DataFilterBar";
import { vendors } from "@/data/vendors";
import { useState } from "react";
import DynamicTable from "@/components/reusable/DynamicTable";
import { VENDOR_COLUMNS } from "./tableConfig";
import { searchLocally } from "@/helper/localSearct";

const VendorsPageContent = () => {
    const [filteredData, setFilteredData] = useState(vendors);

    const handleSearch = (query: string) => {
        if (!query) {
            setFilteredData(vendors);
            return;
        }

        const result = searchLocally(query);
        setFilteredData(result);
    };

    return (
        <>
            <DataFilterBar onSearch={handleSearch} allCategories />

            <div className="mt-5">
                <DynamicTable
                    columns={VENDOR_COLUMNS}
                    data={filteredData}
                    currentPage={1}
                    itemsPerPage={10}
                    onPageChange={() => { }}
                    totalpage={10}
                    border={false}
                    onView={() => { }}
                />
            </div>
        </>
    );
};

export default VendorsPageContent;
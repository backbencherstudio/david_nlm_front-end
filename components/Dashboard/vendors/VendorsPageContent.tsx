'use client'

import DataFilterBar from "../common/DataFilterBar";
import { vendors } from "@/data/vendors";
import { useState } from "react";
import DynamicTable from "@/components/reusable/DynamicTable";
import { VENDOR_COLUMNS } from "./tableConfig";
import { searchLocally } from "@/helper/localSearct";

const VendorsPageContent = () => {
    const [filteredData, setFilteredData] = useState(vendors);

    const [filters, setFilters] = useState({
    search: "",
    category: "all",
    subscription: "all",
  });

  const applyFilters = (newFilters: any) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);

    let data = [...vendors];

    if (updated.search) {
      data = searchLocally(updated.search);
    }

    if (updated.category !== "all") {
      data = data.filter((v) => v.category === updated.category);
    }

    // if (updated.subscription !== "all") {
    //     data = data.filter((v) => v.subscription.toLowerCase() === updated.subscription.toLowerCase());
    // }

    setFilteredData(data);
  };

    return (
        <>
            <DataFilterBar  
                onSearch={(q) => applyFilters({ search: q })}
                onCategoryChange={(val) => applyFilters({ category: val })} 
                categoryValue={filters.category}
                allCategories
                // allStatus
                // statusValue={filters.subscription}
                // onStatusChange={(val) => applyFilters({ subscription: val })}
            />

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
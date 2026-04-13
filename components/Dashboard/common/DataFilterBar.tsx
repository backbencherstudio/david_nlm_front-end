'use client'
import { searchLocally } from '@/helper/localSearct';
import { GenericSearch } from '../search/GenericSearch';
import SelecteInputField from '@/components/reusable/InputFiled/SelectInputField';
import GenericSelect from './GenericSelectInput';
import FunnelIcon from '@/icons/FunnelIcon';

interface DataFilterBarProps {
    allCategories?: boolean;
    allStatus?: boolean;
    allPlans?: boolean;
    allPayments?: boolean;
}

const DataFilterBar = ({ allCategories, allStatus, allPlans, allPayments }: DataFilterBarProps) => {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center bg-grayBg p-3 rounded-xl gap-2'>

            {/* Search */}
            <GenericSearch
                onSearch={searchLocally}
                debounceMs={10}
                placeholder='Search Vendor'
                minChars={1}
                onSelect={(country) => console.log(country.label)}
                className='w-full sm:w-[12rem] md:w-[31.25rem]'
                size='sm'
            />

            {/* Filters */}
            <div className='flex flex-col w-full gap-2 sm:flex-row sm:w-auto'>

                {allCategories && (
                    <GenericSelect
                        placeholder='All Categories'
                        options={[{ label: "All Categories", value: "all" }, { label: "Active", value: "active" }, { label: "Inactive", value: "inactive" }]}
                        width="w-full sm:w-[12rem] md:w-[10rem]"
                        textSize="text-xs"
                        textColor="text-descriptionColor"
                        placeholderColor="text-grayColor2 font-medium"
                        borderWidth="border-[0.5px]"
                        shadow="shadow-none"
                        hoverTextColor="hover:text-purpleTwo"
                        dropdownShadow="shadow-none"
                        itemHoverText="focus:text-purpleOne"
                        leftIcon={<FunnelIcon />}
                    />
                )}

                {allStatus && (
                    <GenericSelect
                        options={[
                            { label: "All Status", value: "all" },
                            { label: "Active", value: "active" },
                            { label: "Inactive", value: "inactive" },
                        ]}
                        placeholder="All Status"
                        width="w-full sm:w-[12rem] md:w-[16rem]"
                    />
                )}

                {allPlans && (
                    <GenericSelect
                        options={[
                            { label: "All Plans", value: "all" },
                            { label: "Active", value: "active" },
                            { label: "Inactive", value: "inactive" },
                        ]}
                        placeholder="All Plans"
                        width="w-full sm:w-[12rem] md:w-[16rem]"
                    />
                )}

                {allPayments && (
                    <GenericSelect
                        options={[
                            { label: "All Payments", value: "all" },
                            { label: "Active", value: "active" },
                            { label: "Inactive", value: "inactive" },
                        ]}
                        placeholder="All Payments"
                        width="w-full sm:w-[12rem] md:w-[16rem]"
                    />
                )}

            </div>
        </div>
    )
}

export default DataFilterBar
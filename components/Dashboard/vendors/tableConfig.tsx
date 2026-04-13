import Image from "next/image";

export const VENDOR_COLUMNS = [
    {
        accessor: "vendorName",
        label: "Vendor Name",
        width: { mobile: "100px", desktop: "200px" },
        formatter: (value: any) => <div className="flex items-center gap-2">
            <Image src={value?.image || "/no-image.jpg"} alt="delete" width={34} height={34} className="rounded-full w-[34px] h-[34px] cursor-pointer" />
            <div className="flex flex-col">
                <span className="text-sm font-medium leading-[160%] text-blackColor">{value?.name}</span>
                <span className="text-xs text-descriptionColor leading-[160%]">{value?.joinedDate}</span>
            </div>
        </div>
    },
    {
        accessor: "category",
        label: "Category",
        width: { mobile: "100px", desktop: "200px" }
    },
    {
        accessor: "subcategory",
        label: "Subcategory",
        width: { mobile: "100px", desktop: "200px" }
    },
    {
        accessor: "operatedService",
        label: "Operated Service",
        width: { mobile: "100px", desktop: "200px" }
    },
    {
        accessor: "location",
        label: "Location",
        width: { mobile: "100px", desktop: "200px" }
    },
    {
        accessor: "subscription",
        label: "Subscription",
        width: { mobile: "100px", desktop: "200px" }
    },
    {
        accessor: "totalBookings",
        label: "Total Bookings",
        width: { mobile: "100px", desktop: "200px" }
    },
]
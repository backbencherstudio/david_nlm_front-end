import { vendors } from "@/data/vendors";


export function searchLocally(query: string) {
  const q = query.toLowerCase();
        const result = vendors.filter((v) => {
            return [
                v.vendorName?.name,
                v.vendorName?.joinedDate,
                v.category,
                v.subcategory,
                v.operatedService,
                v.location,
                v.subscription,
                String(v.totalBookings),
            ]
                .filter(Boolean)
                .some((field) => field.toLowerCase().includes(q));
        });
        return result;
}
import { SearchResult } from '@/types'
const COUNTRIES: SearchResult[] = [
    { id: "us", label: "United States", description: "North America" },
    { id: "uk", label: "United Kingdom", description: "Europe" },
    { id: "de", label: "Germany", description: "Europe" },
    { id: "jp", label: "Japan", description: "Asia" },
    { id: "au", label: "Australia", description: "Oceania" },
];

export function searchLocally(query: string): SearchResult[] {
    const q = query.toLowerCase();

    return COUNTRIES.filter((c) => c.label.toLowerCase().includes(q) || (c.description ?? "").toLowerCase().includes(q))
}

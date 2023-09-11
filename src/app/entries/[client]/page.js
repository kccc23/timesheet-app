import aggregateEntries from "@/lib/aggregate-entries";
import { totalBillableHours, totalBillableAmount } from "@/lib/bill";
import AggrSheet from "@/components/AggregatedSheet";
import Details from "@/components/EntryDetails";
import Link from "next/link";
import { getEntriesByClient } from "@/lib/queries";

export default async function Entries({ params }) {
    const client = params.client;
    const timesheets = await getEntriesByClient(client);
    const aggregated = aggregateEntries(timesheets);
    const totalHours = totalBillableHours(timesheets);
    const totalAmount = totalBillableAmount(timesheets);

    return (
        <div className="container mx-auto p-8">
            <div className="my-5 mb-8">
                <Link href="/entries">
                    <button className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Home</button>
                </Link>
            </div>
            <div className="bg-gray-100 p-5 rounded-md shadow-lg">
                <AggrSheet aggregated={aggregated} totalHours={totalHours} totalAmount={totalAmount} />
                <input type="checkbox" id="toggleDetails" className="absolute opacity-0 w-0 h-0" />
                <label htmlFor="toggleDetails" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Show More Details
                </label>
                <div id="show-details" >
                    <Details timesheets={timesheets} />
                </div>
            </div>
        </div>
    )
}
import aggregateEntries from "@/lib/aggregate-entries";
import { totalBillableHours, totalBillableAmount } from "@/lib/bill";
import AggrSheet from "@/components/AggregatedSheet";
import Link from "next/link";
import { getEntries, getClients } from "@/lib/queries";

export default async function Entries() {
    const timesheets = await getEntries();
    const clients = await getClients();
    const aggregated = aggregateEntries(timesheets);
    const totalHours = totalBillableHours(timesheets);
    const totalAmount = totalBillableAmount(timesheets);

    return (
        <div className="container mx-auto p-8">
            <div>
                <input type="checkbox" id="toggleClientList" className="absolute opacity-0 w-0 h-0" />
                <label htmlFor="toggleClientList" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Clients
                </label>
                <ul id="client-list" className="space-y-2">
                    <div className="bg-gray-100 p-5 rounded-md shadow-lg mb-6 relative">
                        {clients.map(client => (
                            <li key={client.client} className="py-1">
                                <Link href={`/entries/${encodeURIComponent(client.client)}`} className="text-blue-500 hover:underline">
                                    {client.client}
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
            <div className="my-5">
                <Link href="/entries/new">
                    <button className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Add Entry</button>
                </Link>
            </div>
            <div className="bg-gray-100 p-5 rounded-md shadow-lg">
                <AggrSheet aggregated={aggregated} totalHours={totalHours} totalAmount={totalAmount} />
            </div>
        </div>
    )
}

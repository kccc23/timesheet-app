import formatAmount from "@/lib/format-amount";

export default function AggrSheet({ aggregated, totalHours, totalAmount }) {

    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-1xl font-bold">Hours Tracked</h1>
                    <h1 className="text-1xl">{totalHours}</h1>
                </div>
                <div>
                    <h1 className="text-1xl font-bold">Billable Amount</h1>
                    <h1 className="text-1xl">{totalAmount}</h1>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Client</th>
                        <th>Hours</th>
                        <th>Billable Hours</th>
                        <th>Billable Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {aggregated.map(entry => (
                        <tr key={entry.id}>
                            <td data-label="Name">{entry.project}</td>
                            <td data-label="Client">{entry.client}</td>
                            <td data-label="Hours">{entry.hours.toFixed(2)}</td>
                            <td data-label="Billable Hours">{entry.billable_hours.toFixed(2)}{" "}
                                ({Math.round(entry.billable_hours / entry.hours * 100)}%)
                            </td>
                            {(formatAmount.format(entry.billable_amount) !== "$0.00") ?
                                (<td data-label="Billable Amount">{formatAmount.format(entry.billable_amount)}</td>) :
                                (<td data-label="Billable Amount">-</td>)
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

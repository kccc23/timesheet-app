import formatAmount from "@/lib/format-amount";

export default function Details({ timesheets }) {

    return (
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
                {timesheets.map(entry => (
                    <tr key={entry.id}>
                        <td data-label="Name">{entry.project}</td>
                        <td data-label="Client">{entry.client}</td>
                        <td data-label="Hours">{entry.hours.toFixed(2)}</td>
                        {(entry.billable === "Yes") ?
                            (<td data-label="Billable Hours">{entry.hours.toFixed(2)}</td>) :
                            (<td data-label="Billable Hours">0</td>)}
                        {(entry.billable === "Yes") ?
                            (<td data-label="Billable Amount">{formatAmount.format(entry.billable_rate * entry.hours)}</td>) :
                            (<td data-label="Billable Amount">-</td>)
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

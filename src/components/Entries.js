"use client";

import React, { useState, useEffect } from "react";

const Entries = () => {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    const formatAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    });

    const fetchEntries = async () => {
        const res = await fetch("/api/entries");
        const newEntries = await res.json();
        setEntries(newEntries);
        setLoading(false);
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    if (loading) return <h1>Loading...</h1>;

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
                {entries.map(entry => (
                    <tr key={entry.id}>
                        <td>{entry.first_name} {entry.last_name}</td>
                        <td>{entry.client}</td>
                        <td>{entry.hours}</td>
                        {(entry.billable === "Yes") ?
                            (<td>{entry.hours} (100%)</td>) :
                            (<td>0.00 (0%)</td>)
                        }
                        {
                            (formatAmount.format(entry.billable_rate * entry.hours) !== "$0.00") ?
                                (<td>{formatAmount.format(entry.billable_rate * entry.hours)}</td>) :
                                (<td>-</td>)
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Entries;
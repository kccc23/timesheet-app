"use client";

import React, { useState, useEffect } from "react";

const Entries = () => {
    const [entries, setEntries] = useState([]);
    const [totalHours, setTotalHours] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
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

        const totalBillableHours = newEntries.reduce((total, entry) => {
            if (entry.billable === "Yes") {
                return total + entry.hours;
            } else {
                return total;
            }
        }, 0);
        setTotalHours(totalBillableHours.toFixed(2));

        const totalBillableAmount = newEntries.reduce((total, entry) => {
            if (entry.billable === "Yes") {
                return total + (entry.billable_rate * entry.hours);
            } else {
                return total;
            }
        }, 0);
        setTotalAmount(formatAmount.format(totalBillableAmount));

        setLoading(false);
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    if (loading) return <h1>Loading...</h1>;

    return (
        <>
        <div className="header-container">
            <div className="hours-tracked">
                <h3 className="header-h3">Hours Tracked</h3>
                <h1>{totalHours}</h1>
            </div>
            <div className="billable-amount">
                <h3 className="header-h3">Billable Amount</h3>
                <h1>{totalAmount}</h1>
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
                {entries.map(entry => (
                    <tr key={entry.id}>
                        <td>{entry.project}</td>
                        <td>{entry.client}</td>
                        <td>{entry.hours}</td>
                        {(entry.billable === "Yes") ?
                            (<td>{entry.hours}{" "}(100%)</td>) :
                            (<td>0.00{" "}(0%)</td>)
                        }
                        {(entry.billable === "Yes") ?
                            (<td>{formatAmount.format(entry.billable_rate * entry.hours)}</td>) :
                            (<td>-</td>)
                        }
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default Entries;
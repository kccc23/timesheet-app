const aggregateEntries = (entries) => {
    const aggr = {};

    entries.forEach(entry => {
        const key = `${entry.project}_${entry.client}`;
        if (!aggr[key]) {
            aggr[key] = { ...entry, hours: 0, billable_hours: 0, billable_amount: 0 };
        }
        aggr[key].hours += entry.hours;
        if (entry.billable === "Yes") {
            aggr[key].billable_hours += entry.hours;
            aggr[key].billable_amount += entry.billable_rate * entry.hours;
        }
    });

    return Object.values(aggr);
};

export default aggregateEntries;
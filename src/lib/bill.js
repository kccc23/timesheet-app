import formatAmount from "@/lib/format-amount";

function totalBillableHours(timesheets) {
    return timesheets.reduce((total, entry) => {
        if (entry.billable === "Yes") {
            return total + entry.hours;
        } else {
            return total;
        }
    }, 0).toFixed(2);
}

function totalBillableAmount(timesheets) {
    const totalBillableAmount = timesheets.reduce((total, entry) => {
        if (entry.billable === "Yes") {
            return total + (entry.billable_rate * entry.hours);
        } else {
            return total;
        }
    }, 0);
    return formatAmount.format(totalBillableAmount);
}

export { totalBillableHours, totalBillableAmount };

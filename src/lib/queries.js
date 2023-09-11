import { openDb } from "../../database/db";

async function getEntries() {
    const db = await openDb();
    const timesheets = await db.all("SELECT * FROM timesheet");

    return timesheets;
}

async function getEntry(id) {
    const db = await openDb();
    const entry = await db.get("SELECT * FROM timesheet WHERE id = ?", [id]);
    return entry;
}

async function getEntriesByClient(client) {
    const db = await openDb();
    const decodedClient = decodeURIComponent(client);
    const timesheets = await db.all("SELECT * FROM timesheet WHERE client = ?", [decodedClient]);

    return timesheets;
}

async function getClients() {
    const db = await openDb();
    const clients = await db.all("SELECT DISTINCT client FROM timesheet");

    return clients;
}

async function createEntry(entry) {
    const {
        date,
        client,
        project,
        project_code,
        hours,
        billable,
        first_name,
        last_name,
        billable_rate,
    } = entry;

    const db = await openDb();

    const result = await db.run(
        `INSERT INTO timesheet (
            date,
            client,
            project,
            project_code,
            hours,
            billable,
            first_name,
            last_name,
            billable_rate
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            date,
            client,
            project,
            project_code,
            hours,
            billable,
            first_name,
            last_name,
            billable_rate,
        ]
    );

    return result;
}

async function deleteEntry(id) {
    const db = await openDb();
    const result = await db.run("DELETE FROM timesheet WHERE id = ?", [id]);

    return result;
}

export { getEntries, getEntry, getEntriesByClient, getClients, createEntry, deleteEntry }
import { openDb } from "./db.js";
import Papa from "papaparse";
import fs from "fs";

async function setupDb() {
    const db = await openDb();
    await db.exec(`CREATE TABLE IF NOT EXISTS timesheet (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        client TEXT NOT NULL,
        project TEXT NOT NULL,
        project_code TEXT NOT NULL,
        hours REAL NOT NULL,
        billable TEXT NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        billable_rate INTEGER NOT NULL
    )`);
}

async function seedDb() {
    const db = await openDb();
    const data = fs.readFileSync("./Sample_Data.csv", 'utf-8');
    const results = Papa.parse(data, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
    });
    const records = results.data;
    for (const record of records) {
        await db.run(
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
                record["Date"],
                record["Client"],
                record["Project"],
                record["Project Code"],
                record["Hours"],
                record["Billable?"],
                record["First Name"],
                record["Last Name"],
                record["Billable Rate"],
            ]
        );
    }
}

async function initialize() {
    await setupDb();
    await seedDb();
}

initialize();

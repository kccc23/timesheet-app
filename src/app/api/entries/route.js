import sqlite3 from "sqlite3";
import { openDb } from "../../../../database/db";
import { NextResponse } from "next/server";

export async function GET() {
    const db = await openDb();
    const timesheets = await db.all("SELECT * FROM timesheet");

    return NextResponse.json(timesheets, {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}

export async function POST(req, res) {
    const db = await openDb();
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
    } = req.body;
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

    if (result) {
        return new Response(null, {
            headers: { "Content-Type": "application/json" },
            status: 201,
        });
    } else {
        throw new Error("Unable to add timesheet");
    }
}
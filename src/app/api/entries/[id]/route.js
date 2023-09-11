import { NextResponse } from "next/server";
import { getEntry, deleteEntry } from "@/lib/queries";

export async function GET(req) {
    const id = req.url.slice(req.url.lastIndexOf("/") + 1);
    const entry = await getEntry(id);

    if (entry) {
        return NextResponse.json(entry, {
            headers: { "Content-Type": "application/json" },
            status: 200,
        });
    } else {
        return new Response(null, {
            headers: { "Content-Type": "application/json" },
            status: 404,
        });
    }
}

export async function DELETE(req) {
    const id = req.url.slice(req.url.lastIndexOf("/") + 1);
    const result = await deleteEntry(id);

    if (result) {
        return new Response(null, {
            headers: { "Content-Type": "application/json" },
            status: 204,
        });
    } else {
        throw new Error("Unable to delete timesheet");
    }
}
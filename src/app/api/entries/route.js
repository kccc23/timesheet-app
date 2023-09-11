import { NextResponse } from "next/server";
import { getEntries, getEntriesByClient, createEntry } from "@/lib/queries";

export async function GET(req) {
    const { url } = req;
    let entries = [];
    if (url.includes("?") && url.includes("client")) {
        const urlParams = new URLSearchParams(req.url.slice(req.url.lastIndexOf("?")));
        const client = urlParams.get("client");
        entries = await getEntriesByClient(client);
    } else {
        entries = await getEntries();
    }
    return NextResponse.json(entries, {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}

export async function POST(req) {
    const entry = await req.json();
    const result = await createEntry(entry);

    if (result) {
        return new Response(null, {
            headers: { "Content-Type": "application/json" },
            status: 201,
        });
    } else {
        return new Response(null, {
            headers: { "Content-Type": "application/json" },
            status: 400,
        });
    }
}

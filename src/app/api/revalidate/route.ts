import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const tag = req.nextUrl.searchParams.get("tag")

    if (!tag) throw new Error("Tag is necessary")

    revalidateTag(tag)

    return NextResponse.json({ message: "cache cleared", tag })
}
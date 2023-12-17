import { db } from "@/server/db";
import { type Subject } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { title, description }: Subject = await request.json();

  try {
    const addSubject = await db.subject.create({
      data: {
        title,
        description,
      },
    });
    return NextResponse.json(addSubject, { status: 200 });
  } catch {
    return NextResponse.json("something went wrong", { status: 500 });
  }
}

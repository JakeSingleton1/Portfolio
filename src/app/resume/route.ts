import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf");
    const buffer = await readFile(filePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Jake-Singleton-Resume.pdf"',
      },
    });
  } catch (err) {
    console.error("Resume file not found:", err);
    return new NextResponse("Resume not found", { status: 404 });
  }
}

// app/api/books/route.ts
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("cover") as File;
  const title = formData.get("title");

  if (!file || !title) {
    return NextResponse.json({ error: "Incomplete data" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filePath = path.join(process.cwd(), "public", "uploads", file.name);
  await writeFile(filePath, buffer);

  // Simpan ke database kalau ada model Buku
  // await db.insert(...)

  return NextResponse.json({ success: true, filePath: `/uploads/${file.name}` });
}

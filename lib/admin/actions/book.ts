"use server";

import { books } from "@/database/schema";
import { db } from "@/database/drizzle";

export async function createBook(input: z.infer<typeof bookSchema>) {
  try {
    const [newBook] = await db
      .insert(books)
      .values({
        title: input.title,
        description: input.description,
        author: input.author,
        genre: input.genre,
        rating: input.rating,
        total_copies: input.totalCopies,
        available_copies: input.totalCopies,
        cover_url: input.coverUrl,
        cover_color: input.coverColor,
        video_url: input.videoUrl,
        summary: input.summary,
        created_at: new Date(),
      })
      .returning();

    return { success: true, data: newBook };
  } catch (error: any) {
    console.error("Error saat create book:", error);
    return {
      success: false,
      message: "Gagal menambahkan buku.",
    };
  }
}

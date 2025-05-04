# 📚 University Library JSM

A full-featured web application for managing university library resources, built with Next.js, Drizzle ORM, ImageKit, and more. Supports user registration, book browsing, and admin functionality.

---

## 🚀 Features

- 📖 Browse books with cover images and video previews
- 🔍 Search and filter functionality
- 🔐 User authentication (sign-up / login)
- 🛠️ Admin panel for managing books
- ☁️ Image and video hosting with ImageKit

---

## 📁 Project Structure Overview

```
├── src/
│   ├── app/               # Next.js app routes (sign-up, login, dashboard, etc.)
│   ├── components/        # UI components like AuthForm, BookCard, FileUpload
│   ├── database/          # Schema and DB config (Drizzle or Prisma)
│   ├── lib/               # Config, validation schema, auth logic
│   │   ├── actions/       # signIn and signUp functions
│   │   ├── validations.ts # Zod schemas for forms
│   └── constants/         # Field names and types for forms
├── public/                # Static assets like icons or placeholders
├── .env.local             # Environment variables (API keys, DB URL, etc.)
├── package.json           # Scripts and dependencies
└── README.md              # This file
```

---

## 🛠️ Getting Started

### 1. 📦 Install Dependencies

```bash
npm install
```

---

### 2. ⚙️ Configure Environment

Buat file `.env.local` di root folder:

```
DATABASE_URL=your_postgres_url
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

---

### 3. 🧱 Set Up Database

Jika menggunakan Prisma:

```bash
npx prisma migrate dev --name init
```

Jika menggunakan Drizzle, sesuaikan dengan setup migrasi Drizzle.

---

### 4. ▶️ Run the Development Server

```bash
npm install
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`.

---

## ✍️ Add a Book (Manual SQL)

Jika kamu ingin menambahkan buku langsung ke database:

```sql
INSERT INTO "books" (
  id,
  title,
  description,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  cover_url,
  cover_color,
  video_url,
  summary,
  created_at
) VALUES (
  gen_random_uuid(),
  'Sapiens',
  'Explores the history and evolution of humankind.',
  'Yuval Noah Harari',
  'Non-fiction',
  4.4,
  10,
  10,
  'book-covers/sapiens.jpg',
  '#2E4053',
  'book-videos/sapiens.mp4',
  'A brief history of our species.',
  now()
);
```

> Pastikan gambar dan video tersedia di ImageKit atau folder publik.

---

## 👤 Add an Admin User (Manual SQL)

```sql
INSERT INTO "users" (
  id,
  full_name,
  email,
  university_id,
  password,
  university_card,
  status,
  role,
  last_activity_date,
  created_at
) VALUES (
  gen_random_uuid(),
  'admin',
  'admin@example.com',
  1,
  '$2a$10$YOUR_HASHED_PASSWORD',
  '',
  'APPROVED',
  'ADMIN',
  now(),
  now()
);
```

🔐 Buat password hash dengan:

```bash
node -e "require('bcryptjs').hash('admin123', 10).then(console.log)"
```

---

## 📦 Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Drizzle ORM](https://orm.drizzle.team/) or [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/) for validation
- [ImageKit](https://imagekit.io/) for image/video hosting
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) for authentication

---

## 📧 Contributing & Support

Feel free to fork this repo, suggest features, or submit issues.  
Made with ❤️ by elsa.

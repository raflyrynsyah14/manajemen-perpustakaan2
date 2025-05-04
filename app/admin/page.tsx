import { db } from "@/database/drizzle";
import { users, books } from "@/database/schema";  // Import books

const Page = async () => {
  // Ambil data pengguna
  const allUsers = await db.select().from(users);

  // Ambil data buku
  const allBooks = await db.select().from(books);

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-700 mb-4">User Statistics</h2>
          <p className="text-lg text-gray-600">Total Users: <span className="font-semibold text-blue-600">{allUsers.length}</span></p>
        </div>

        <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">User List</h2>
          <table className="w-full table-auto text-sm text-gray-600">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left bg-gray-100">ID</th>
                <th className="px-4 py-2 text-left bg-gray-100">Name</th>
                <th className="px-4 py-2 text-left bg-gray-100">Email</th>
                <th className="px-4 py-2 text-left bg-gray-100">Role</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tambahkan bagian untuk menampilkan daftar buku */}
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Book List</h2>
          <table className="w-full table-auto text-sm text-gray-600">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left bg-gray-100">ID</th>
                <th className="px-4 py-2 text-left bg-gray-100">Title</th>
                <th className="px-4 py-2 text-left bg-gray-100">Author</th>
                <th className="px-4 py-2 text-left bg-gray-100">Published Date</th>
              </tr>
            </thead>
            <tbody>
              {allBooks.map((book) => (
                <tr key={book.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{book.id}</td>
                  <td className="px-4 py-2">{book.title}</td>
                  <td className="px-4 py-2">{book.author}</td>
                  <td className="px-4 py-2">{book.publishedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Page;

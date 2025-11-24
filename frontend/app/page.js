import Image from "next/image";
import getbooks from "@/libs/getbooks";


export default async function Home() {
  const books = await getbooks();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ul>
        {
          books.map(book => {
            return (
              <li key={book.id}>
                <h1>{book.title}</h1>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

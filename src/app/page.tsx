import Header from "@/components/Header";
import { SearchInput } from "@/components/home/SearchInput";

export default function HomePage() {
  console.log("fo0HSha3l1BKyt7mjJoXp".length);
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-5 pb-36">
      <Header />
      <SearchInput />
    </main>
  );
}

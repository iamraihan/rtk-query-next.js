import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <Link href="/posts">Posts</Link>
      </div>
    </main>
  );
}

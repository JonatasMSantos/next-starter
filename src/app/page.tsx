import { Widget } from "@/components/Widget";

export default function Home() {
  return (
    <main className="h-screen flex flex-wrap text-zinc-800 dark:text-zinc-50 justify-center">
      <div className="flex-none">
        <Widget></Widget>
      </div>
    </main>
  );
}

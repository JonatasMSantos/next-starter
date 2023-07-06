import { Widget } from '@/components/Widget'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex h-screen flex-wrap justify-center text-zinc-800 dark:text-zinc-50">
      <Link href="/dashboard">Dashboard</Link>
      <div className="flex-none">
        <Widget></Widget>
      </div>
    </main>
  )
}

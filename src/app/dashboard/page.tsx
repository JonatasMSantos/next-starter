import { User } from '@/components/User'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-gray-50">Dashboard</h1>

      <User />

      <Link href="/">
        <span className="text-gray-50">Ir para Home</span>
      </Link>
    </div>
  )
}

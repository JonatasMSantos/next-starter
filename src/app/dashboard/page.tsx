'use client'

import { Suspense } from 'react'
import { Repo } from '@/components/Repo'
import { useRouter } from 'next/navigation'
import { Count } from '@/components/Count'

// SSR Streaming (Suspense)
// useRouter

export const metadata = {
  title: 'Dashboard',
  description: 'Your dash',
}

export default function Home() {
  const router = useRouter()

  function irParaHome() {
    router.push('/')
  }

  return (
    <div>
      <h1 className="text-gray-50">Dashboard</h1>
      <Count />

      <Suspense
        fallback={<p className="text-white">Carregando repositórios</p>}
      >
        <Repo />
      </Suspense>

      <span className="text-gray-50" onClick={irParaHome}>
        Ir para Home
      </span>

      {/* <Link href="/">
        <span className="text-gray-50">Ir para Home</span>
      </Link> */}
    </div>
  )
}

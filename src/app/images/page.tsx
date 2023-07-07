'use client'

import { ImageCard } from '@/components/ImageCard'
import { useState } from 'react'

export default function Images() {
  const types = ['person', 'city', 'abstract', 'dog']

  const [type, setType] = useState('person')
  const [index, setIndex] = useState(0)
  const [size, setSize] = useState(300)

  function handleChangeImage() {
    setIndex((previuos) => (previuos === 3 ? 0 : previuos + 1))
    console.log(index)
    setType(types[index])
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <ImageCard
        size={size}
        className="border border-green-100"
        change={handleChangeImage}
        value={type}
      />
      <input
        className="boder-cyan-400 rounded-lg border bg-slate-600 p-2 text-cyan-400"
        type="number"
        value={size}
        onChange={(e) => setSize(+e.target.value)}
      />
    </div>
  )
}

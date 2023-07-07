import { useState } from 'react'

export function Count() {
  const [count, setCont] = useState(0)

  function increment() {
    setCont((previusStatue) => previusStatue + 1)
  }

  return (
    <div>
      <p className="text-white">{count}</p>
      <button className="h-10 w-10 bg-gray-500" onClick={increment}>
        Somar
      </button>
    </div>
  )
}

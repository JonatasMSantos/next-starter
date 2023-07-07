import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'

interface ImageCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  change: () => void
  size: number
}

export function ImageCard({ value = 'person', size, change }: ImageCardProps) {
  const imgUrl = `https://source.unsplash.com/featured/${size}x${size}?${value}`

  function renderImage() {
    return (
      <Image
        key="1"
        onClick={change}
        className="rounded-md"
        src={imgUrl}
        alt={value}
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL={'/reporteme.png'}
        sizes="(max-width: 100px) 100vw,
              (max-width: 100px) 100vw,
              100vw"
      />
    )
  }

  return <>{renderImage()}</>
}

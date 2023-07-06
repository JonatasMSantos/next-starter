interface ChartProps {
  params: {
    id: string
  }
}

export default async function Product({ params }: ChartProps) {
  return (
    <>
      <h1 className="text-white">{params.id}</h1>
    </>
  )
}

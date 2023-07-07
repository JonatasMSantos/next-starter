interface ChartProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ChartProps) {
  return {
    title: `Dash ${params.id}`,
  }
}

export default async function Product({ params }: ChartProps) {
  return (
    <>
      <h1 className="text-white">{params.id}</h1>
    </>
  )
}

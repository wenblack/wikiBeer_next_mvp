import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { LoadingView } from "@/components/LoadingView"
import { BeerProps } from "@/utils/BeerInterface"
import { BeerDetail } from "@/components/BeerDetail"
import { Header } from "@/components/Header"

export default function Page() {
  const [data, setData] = useState<BeerProps>()
  const router = useRouter()
  const { id } = router.query




  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/detail/${id}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result.data[0])
    }
    fetchData().catch((e) => {
      // handle the error as needed
      console.error('An error occurred while fetching the data: ', e)
    })

  })

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {data != null ?
        <>
          <Header></Header>
          <BeerDetail
            ABV={data.ABV}
            IBU={data.IBU}
            categorie={data.categorie}
            categorieId={data.categorieId}
            id={data.id}
            imageUrl={data.imageUrl}
            name={data.name}
            rating={data.rating}
            Notes={data.Notes}
            description={data.description}
            reviews={data.reviews}
          />
        </>
        : <LoadingView />}
    </div>
  )

}



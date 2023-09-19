import { useRouter } from "next/router"
import { LoadingView } from "@/components/LoadingView"
import { BeerProps } from "@/utils/BeerInterface"
import { BeerDetail } from "@/components/BeerDetail"
import { Header } from '@/components/Header'
import { Roboto_Flex } from 'next/font/google'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ResultList } from "@/components/ResultList"

const roboto = Roboto_Flex({ subsets: ['latin'] })

export default function Home() {
  const [dataOne, setDataOne] = useState([])
  const [loading, setIsLoading] = useState(false)
  const [test, setTes] = useState(false)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    getdata()
  })


  async function getdata() {

    const fetch = await axios.get(`/api/search/${id}`).then((response) => {
      setDataOne(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
    setTes(true)
    setIsLoading(true)
  }

  function teste(value: boolean) {
    if (value) {
      setIsLoading(true)
    }
  }

  if (loading === false) {
    return <LoadingView></LoadingView>
  }

  return (
    <div className={` flex overflow-hidden  min-h-[100vh] w-full   flex-col  max-w-screen bg-bgPrimary ${roboto.className}`}>
      <header>
        <Header></Header>
      </header>
      <main className='flex flex-col items-center justify-center overflow-x-hidden w-screen mt-24 sm:mt-28'>
        <ResultList categorieName={`${dataOne.length} resultados`} beers={dataOne} />
      </main>
    </div>
  )
}

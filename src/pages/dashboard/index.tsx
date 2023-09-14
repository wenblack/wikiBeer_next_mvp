import { Header } from '@/components/Header'
import { Roboto_Flex } from 'next/font/google'
import { Auth } from '@/middlewares/Auth'
import { BeerList } from '@/components/BeerList'
import { CategorieBox } from '@/components/CategorieBox'
import { useEffect, useState } from 'react'
import axios from 'axios'


const roboto = Roboto_Flex({ subsets: ['latin'] })

export default function Home() {
  const [dataOne, setDataOne] = useState([])
  const [dataTwo, setDataTwo] = useState([])
  const [dataThree, setDataThree] = useState([])
  const [loading, setIsLoading] = useState(false)

  useEffect(() => {
    getdata()
  }, [loading])


  async function getdata() {
    const firstFetch = await axios.get('/api/categorie/ale')
    const secondFetch = await axios.get('/api/categorie/lager')
    const thirdFetch = await axios.get('/api/categorie/weiss')

    setDataOne(firstFetch.data.result)
    setDataTwo(secondFetch.data.result)
    setDataThree(thirdFetch.data.result)
    setIsLoading(true)
  }

  return (
    <Auth>
      <div className={` flex overflow-hidden  min-h-[100vh] w-full   flex-col  max-w-screen bg-bgPrimary ${roboto.className}`}>
        <header>
          <Header></Header>
        </header>
        <main className='flex flex-col overflow-x-hidden w-screen mt-24 sm:mt-28'>
          <section className='grid m-auto gap-4 lg:gap-8 mb-8 grid-cols-2 sm:grid-cols-4 '>
            <CategorieBox name='Weiss / WitBier' />
            <CategorieBox name='Lager / Pilsen' />
            <CategorieBox name='Pale Ale / IPA' />
            <CategorieBox name='Ranking' />
          </section>
          <BeerList categorieName='ale' key="novidades" beers={dataOne}></BeerList>
          <BeerList categorieName='weiss' key='weiss' beers={dataTwo}></BeerList>
          <BeerList categorieName='lager' key='lager' beers={dataThree}></BeerList>
        </main>
      </div>
    </Auth>
  )
}

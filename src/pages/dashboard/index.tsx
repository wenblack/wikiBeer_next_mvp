import { Header } from '@/components/Header'
import { Roboto_Flex } from 'next/font/google'
import { Auth } from '@/middlewares/Auth'
import { BeerList } from '@/components/BeerList'
import { CategorieBox } from '@/components/CategorieBox'


const roboto = Roboto_Flex({ subsets: ['latin'] })

export default function Home() {
  return(
    <Auth>
      <div className={` flex overflow-hidden  min-h-[100vh] w-full   flex-col  max-w-screen bg-bgPrimary ${roboto.className}`}>
      <header>
        <Header></Header>
      </header>
      <main className='flex flex-col overflow-x-hidden w-screen mt-24 sm:mt-28'>
      <section className='grid m-auto gap-4 lg:gap-8 mb-8 grid-cols-2 sm:grid-cols-4 '>
        <CategorieBox name='Weiss / WitBier'/>
        <CategorieBox name='Lager / Pilsen'/>
        <CategorieBox name='Pale Ale / IPA'/>
        <CategorieBox name='Ranking'/>
      </section>
        <BeerList  categorie='Novidades' id='new'></BeerList>
        <BeerList categorie='Recomendação' id='candies'></BeerList>
        <BeerList categorie='Mais votadas' id='drinks'></BeerList>
      </main>   
    </div>
    </Auth>
  )
}

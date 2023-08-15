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
      <header className=' flex top-0   text-white '>
        <Header></Header>
      </header>
      <main className='flex flex-col overflow-x-hidden  w-screen mt-24 sm:mt-32'>
      <section className='grid m-auto gap-4 mb-8 grid-cols-2 sm:grid-cols-3 '>
        <CategorieBox name='Weiss'/>
        <CategorieBox name='Lager'/>
        <CategorieBox name='IPA'/>
      </section>
        <BeerList  categorie='Tradicionais' id='main'></BeerList>
        <BeerList categorie='Pale Ale' id='candies'></BeerList>
        <BeerList categorie='Cervejas de Trigo' id='drinks'></BeerList>
      </main>
      
    </div>
    </Auth>
  )
}

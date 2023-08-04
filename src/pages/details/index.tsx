import { Roboto_Flex } from 'next/font/google'
import { Poppins } from 'next/font/google'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Auth } from '@/middlewares/Auth'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { IngredientsList } from '@/components/IngredientsList'

import saladImage from '../../assets/images/salad.png'
import arrowLeftIcon from '../../assets/svg/CaretLeft.svg'

const roboto = Roboto_Flex({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['700', '600', '500', '400'] })


export default function Details() {
  const [total, setTotal] = useState(1)
  const router = useRouter()

  function sub(e: any) {
    e.preventDefault()
    if (total === 1) {
      return
    }
    setTotal(total - 1)
  }
  function add(e: any) {
    e.preventDefault()
    setTotal(total + 1)
  }
  function navigateTOCart(e: any) {
    e.preventDefault()
    router.push('/cart')
  }

  return (
   <Auth>
     <div className='flex flex-col bg-bgPrimary w-screen overflow-hidden h-screen '>
      <header className='top-0  text-white'>
        <Header />
      </header>
      <main className={` grid mt-28 lg:mt-32 items-center justify-between h-screen lg:overflow-x-hidden overflow-y-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  w-screen  bg-bgPrimary  ${roboto.className}`}>
        {/* Logo Column(Desktop)*/}
        <section className=' bg-bgPrimary items-start text-white grid '>
          <div className=' flex flex-col gap-8 '>
            <Link className='flex   ml-[10vw] w-28 hover:opacity-70 h-[34px] justify-start items-center' href={'/dashboard'}>
              <Image alt='Left Arrow Icon' src={arrowLeftIcon} />
              <span className={`${poppins.className} font-medium text-2xl`}>
                voltar
              </span>
            </Link>
            <span className={`flex w-full lg:pt-0  items-center self-center justify-center`}>
              <Image alt='product Image' height={250} src={saladImage}></Image>
            </span>
          </div>
        </section>
        {/* Form Column */}
        <section className=' text-white grid w-full max-w-[100vw] mt-8 lg:mt-0 self-center bg-bgPrimary'>
          <div className={`flex flex-col w-full pb-8 items-center lg:items-start ${poppins.className} `}>
            <h1 className='text-4xl flex w-full mb-2 leading-[56px] max-w-[603px]  font-medium lg:text-[42px] pl-8 lg:pl-0 md:pl-8'>Salada Ravanello</h1>
            <p className='px-8 w-full font-normal max-w-[603px] lg:text-left text-lg lg:text-xl lg:px-0 md:px-8 '>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <span className='mt-8 items-center max-w-[80vw] justify-center'>
              <IngredientsList />
            </span>
            <span className={`flex  flex-col  lg:hidden gap-4  items-center mt-8  lg:mt:11 ${roboto.className} text-priceBlue text-3xl w-[80vw] max-w-[400px] `}>
              <h3 >R$ 25,97</h3>
              <form className='flex  text-title gap-2 flex-col items-center w-full  justify-between'>
                <span className='flex w-[40vw] items-center justify-between'>
                  <button className='hover:opacity-70' onClick={sub}>-</button>
                  {
                    total === 1 ? '01' : total
                  }
                  <button className='hover:opacity-70' onClick={add}>+</button>
                </span>
                <button onClick={navigateTOCart} className='hover:opacity-70 bg-redButton block px-4 text-title h-[56px] w-[100px] rounded-lg text-lg' >incluir</button>
              </form>
            </span>

            <span className={`hidden lg:flex w-[400px]  items-center mt-8 ${roboto.className} text-priceBlue text-3xl justify-between `}>
              <h3 className='flex ' >R$ 25,97</h3>
              <form className='text-title'>
                <span className='flex items-center  gap-4 justify-between'>
                  <button className='hover:opacity-70' onClick={sub}>-</button>
                  {
                    total === 1 ? '01' : total
                  }
                  <button className='hover:opacity-70' onClick={add}>+</button>
                  <button onClick={navigateTOCart} className='hover:opacity-70 bg-redButton block px-4 ml-6 text-title h-[56px] w-[100px] rounded-lg text-lg' >incluir</button>
                </span>
              </form>
            </span>
          </div>
        </section>
      </main>
      <footer className=' bottom-0 '>
        <Footer></Footer>
      </footer>
    </div>
   </Auth>
  )
}

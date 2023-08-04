import { Roboto_Flex } from 'next/font/google'
import { PaymentView } from '@/components/PaymentView'
import { ProductsList } from '@/components/ProductsList'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useRouter } from 'next/router'
import { Auth } from '@/middlewares/Auth'

const roboto = Roboto_Flex({ subsets: ['latin'] })


export default function OrderView() {
  const router = useRouter()
  const { status } = router.query
  let statusToString = String(status)

  return (
    <Auth>
      <div className='overflow-hidden'>
      <header className='  text-white'>
        <Header></Header>
      </header>
      <main className={`min-h-screen py-20  md:pt-20 lg:pt-24  md:flex-col md:flex md:justify-evenly lg:overflow-hidden lg:grid  h-full grid md:grid-cols-2 lg:grid-cols-2  w-screen bg-bgPrimary  ${roboto.className}`}>
        <div className='flex py-16  sm:py-16  md:flex overflow-hidden sm:overflow-auto bg-bgPrimary text-white   lg:grid md:h-full items-center justify-center'>
          <ProductsList />
        </div>
        {/* Form Column */}
        <div className=' text-white md:h-full  lg:py-0 sm:py-16  grid h-full items-center justify-center bg-bgPrimary'>
          {/* Desktop Version*/}
          <div className=' hidden md:flex lg:flex flex-col max-w-[530px] items-center justify-center  w-[100vw] max-h-[560px]  bg-bgPrimary '>
            <PaymentView status={statusToString} ></PaymentView>
          </div>
          {/* Mobile version*/}
          <div className=' flex md:hidden sm:flex pb-16  lg:hidden flex-col  items-center justify-center  w-[100vw]  md:max-w-[476px]  bg-bgPrimary '>
            <PaymentView status={statusToString} ></PaymentView>
          </div>
        </div>
      </main>
      <footer className=' fixed bottom-0 w-screen'>
        <Footer></Footer>
      </footer>
      </div>
    </Auth>
  )
}

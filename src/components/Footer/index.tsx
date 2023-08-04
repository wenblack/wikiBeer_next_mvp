import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import whiteLogo from '../../assets/svg/explorerLogoWhite.svg'


const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Footer() {
  return (
    <Disclosure
      as="div"
      className="flex relative justify-around items-center  h-[102px]  w-screen bg-bgSecondary"
    >
        <>
          <div className="lg:mx-32 w-full md:mx-24 sm:px-6 lg:px-8 h-full">
            <div className=" flex h-full items-center justify-around">
              <div className="flex flex-1 items-center justify-center sm:flex-row sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 sm:justify-center sm:flex-col items-center">
                  <span className={` hidden opacity-30 md:hidden sm:hidden gap-3 items-center font-bold text-2xl text-title lg:flex ${poppins.className}`}>
                    <Image src={whiteLogo} alt="App polygon logo" width={30} height={30}></Image>
                    food explorer
                  </span>
                  <span className={`flex gap-3 opacity-30 items-center font-bold text-xl text-title lg:hidden ${poppins.className}`}>
                    <Image src={whiteLogo} alt="App polygon logo" width={25} height={25} ></Image>
                    food explorer
                  </span>
                </div>
              </div>
              <div className=" hidden inset-y-0 right-0 md:flex sm:flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <span className='text-sm  text-textFooter'>© 2022 - Todos os direitos reservados</span>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <span className='text-sm  text-textFooter'>© 2022 - Todos os direitos reservados</span>
            </div>
          </Disclosure.Panel>
        </>
    </Disclosure>
  )
}

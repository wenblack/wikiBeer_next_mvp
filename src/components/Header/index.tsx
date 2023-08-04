import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logOutIcon from '../../assets/svg/logOut.svg'
import search from '../../assets/svg/Search.svg'
import { Button } from '../Button'
import { Logo } from '../Logo'
import { disconnect } from '@/utils/disconnect'

const navigation = [
  { name: '❤ Meus Favoritos ', href: '#', current: false },
  { name: '📝 Meu pedido', href: '/orders', current: false },
  { name: '❌  Sair', href: '/', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {

  
  return (
    <Disclosure
      as="nav"
      className=" justify-between z-10 items-center fixed h-[102px] top-0 w-screen bg-bgSecondary"
    >
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-32 h-full">
            <div className="relative flex h-full items-center justify-around">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex mx-2 items-center justify-center rounded-md p-2 text-title hover:bg-gray-700 hover:text-white hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span className={`flex gap-3  items-center font-bold text-xl text-title sm:hidden md:hidden lg:hidden `}>
                    <form action="" className="flex focus-within:ring text-sm h-full w-[240px] max-w-[400px] bg-bgForm gap-3 rounded-lg px-[14px] py-[12px]">
                      <Image src={search} alt="Search logo Icon" width={30} height={30}></Image>
                      <input className="bg-transparent  w-full outline-none font-normal text-base " placeholder="Busque pelas opções"></input>
                    </form>
                  </span>
                  <Link href={'/dashboard'} className={` hidden md:hidden sm:hidden gap-3 items-center font-bold text-2xl text-title lg:flex `}>
                    <Logo></Logo>
                  </Link>
                </div>
                <div className="hidden w-full sm:ml-2 sm:block">
                  <div className="flex h-full justify-center items-center gap-8">
                    <Link className="flex hover:opacity-70 text-title  md:flex lg:flex  items-center ml-8 font-normal text-base" href={'#'}>
                      Meus Favoritos
                    </Link>
                    <form action="" className="h-12 flex focus-within:ring sm:hidden md:flex w-full min-w-[250px] max-w-[410px] bg-bgForm gap-3 rounded-lg px-[16px] py-[14px]">
                      <Image src={search} alt="Search logo Icon" ></Image>
                      <input className="bg-transparent w-full outline-none font-normal text-base " placeholder="Busque pelas opções de pratos"></input>
                    </form>
                    <form action="" className="h-12 focus-within:ring w-full hidden text-sm md:hidden sm:flex  bg-bgForm gap-3 rounded-lg px-[14px] py-[12px]">
                      <Image src={search} alt="Search logo Icon" width={30} height={30}></Image>
                      <input className="bg-transparent w-full outline-none font-normal text-base " placeholder="Busque pelas opções"></input>
                    </form>
                    <Link href='/orders' className="flex sm:hidden md:flex">
                      <Button value="Meu pedido " order number={0} />
                    </Link>
                    <Link href='/orders' className="flex w-[120px] md:hidden lg:hidden">
                      <Button value="" order number={0} />
                    </Link>
                  </div>

                </div>
              </div>
              <div className="absolute hidden inset-y-0 right-0 md:flex sm:flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <Link onClick={disconnect}  href={'/'} className="ml-8 hover:opacity-70" >
                  <Image src={logOutIcon} alt="LogOut Icon"></Image>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden rounded-lg">
            <div className="space-y-1 px-3 pb-3 pt-2  bg-bgForm  border-2 rounded-lg border-title border-opacity-30 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-lg font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

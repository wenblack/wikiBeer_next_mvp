import a from 'next/link'
import Image from 'next/image'
import search from '../../assets/svg/Search.svg'
import {
  IoTrophyOutline,
  IoTrophy,
  IoHomeOutline,
  IoHome,
  IoSearchOutline,
  IoSearch,
  IoPersonCircle,
  IoPersonCircleOutline
} from 'react-icons/io5'
import { disconnect } from '@/utils/disconnect'
import logOutIcon from '@/assets/svg/logOut.svg'
import logoWithouImage from '@/assets/images/logoWithoutName.png'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenu } from "react-icons/io5"

export function Header() {


  return (
    <nav
      className=" justify-between z-10 shadow-md items-center fixed  top-0 w-screen py-4  bg-textWhite"
    >
      <div className="px-2  h-full">
        <div className="relative flex h-8 sm:h-12 items-center justify-around">

          <Image alt='' className=' p-4 hidden sm:flex object-contain' src={logoWithouImage}></Image>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <span className={`flex gap-3  items-center font-bold text-xl text-title sm:hidden md:hidden lg:hidden `}>
                <form action="" className="flex p-2  ring-2 ring-descriptionField   text-[black] opacity-80 focus-within:ring-title hover:ring-title  text-sm h-full w-[240px] max-w-[80vw] bg-bgForm gap-3 rounded-full ">
                  <Image src={search} alt="Search logo Icon" width={30} height={30}></Image>
                  <input className="bg-transparent  w-full outline-none font-normal text-base " placeholder="Busque pelas opções"></input>
                </form>
              </span>
            </div>
            <div className="hidden w-full sm:ml-2 sm:block ">
              <div className="flex h-full justify-center items-center gap-8">
                <form action="" className="h-12 flex shadow-md ring-2 ring-descriptionField   text-[black]  opacity-80 focus-within:ring-title hover:ring-title  sm:hidden md:flex w-full min-w-[250px] max-w-[50vw] bg-bgForm gap-3 rounded-full px-[14px] py-[12px] ">
                  <Image src={search} alt="Search logo Icon" ></Image>
                  <input
                    className="bg-transparent w-full outline-none font-normal text-base "
                    placeholder="Encontre uma breja"
                  />
                </form>
                <form action="" className="h-12 max-w-[50vw]  shadow-md ring-2 ring-descriptionField   text-[black] opacity-80 focus-within:ring-title hover:ring-title w-full hidden text-sm md:hidden sm:flex  bg-bgForm gap-3 rounded-full px-[14px] py-[12px]">
                  <Image src={search} alt="Search logo Icon" width={30} height={30}></Image>
                  <input className="bg-transparent w-full outline-none font-normal text-base " placeholder="Encontre uma breja"></input>
                </form>
              </div>
            </div>
            <button className='sm:hidden absolute mt-2 right-2  ' >
              <Sheet>
                <SheetTrigger>
                  <IoMenu size={32} color='orange' />
                </SheetTrigger>
                <SheetContent className='bg-button text-white'>
                  <SheetHeader className=' border-b-2 pb-1'>
                    <SheetTitle className=' text-white font-bold' >Menu</SheetTitle>
                  </SheetHeader>
                  <ul>
                    <li >
                      <a className='flex   mt-4 items-center gap-4' href={'/dashboard'}>
                        <IoHome size={25} color='white' />
                        Página inicial
                      </a>
                    </li>
                    <li>
                      <a className='flex text-white mt-4 gap-4' href={'/dashboard'} >
                      <IoTrophy size={25} color='white' />
                        Ranking
                      </a>
                    </li>
                    <li>
                    <a className='flex mt-4 gap-4 text-white' href={'/dashboard'} >
                      <IoPersonCircle size={25} color='white' />
                        Minha conta
                      </a>
                    </li>
                    <li>
                    <a className='flex mt-4 gap-4 text-white  ' href={'/'} onClick={disconnect}>
                        <Image src={logOutIcon} alt='logOut Icon' />
                        Sair
                      </a>
                    </li>
                  </ul>
                </SheetContent>

              </Sheet>
            </button>
            <button className='hidden sm:flex mt-2 pr-8 hover:opacity-70  ' >
              <Sheet>
                <SheetTrigger>
                  <IoMenu size={32} color='orange' />
                </SheetTrigger>
                <SheetContent className='bg-button text-white'>
                  <SheetHeader className=' border-b-2 pb-1'>
                    <SheetTitle className='text-white' >Menu</SheetTitle>
                  </SheetHeader>
                  <ul>
                    <li >
                      <a className='flex   mt-4 items-center gap-4' href={'/dashboard'}>
                        <IoHomeOutline size={25} color='white' />
                        Página inicial
                      </a>
                    </li>
                    <li>
                      <a className='flex text-white mt-4 gap-4' href={'/dashboard'} >
                      <IoTrophyOutline size={25} color='white' />
                        Ranking
                      </a>
                    </li>
                    <li>
                    <a className='flex mt-4 gap-4 text-white' href={'/dashboard'} >
                      <IoPersonCircle size={25} color='white' />
                        Minha conta
                      </a>
                    </li>
                    <li>
                    <a className='flex mt-4 gap-4 text-white  ' href={'/'} onClick={disconnect}>
                        <Image src={logOutIcon} alt='logOut Icon' />
                        Sair
                      </a>
                    </li>
                  </ul>
                </SheetContent>
              </Sheet>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

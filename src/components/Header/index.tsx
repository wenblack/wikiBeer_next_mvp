import Link from 'next/link'
import Image from 'next/image'
import search from '../../assets/svg/Search.svg'
import { disconnect } from '@/utils/disconnect'
import logoWithouImage from '@/assets/images/logoWithoutName.png'
export function Header() {

  
  return (
    <nav
      className=" justify-between z-10 shadow-lg items-center fixed h-[15vh] top-0 w-screen bg-textWhite"
    >
          <div className="px-2 sm:px-6 lg:px-32 h-full">
            <div className="relative flex h-full items-center justify-around">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span className={`flex gap-3  items-center font-bold text-xl text-title sm:hidden md:hidden lg:hidden `}>
                    <form action="" className="flex shadow-md ring-2 ring-descriptionField  text-[black] opacity-80 focus-within:ring-title hover:ring-title  text-sm h-full w-[240px] max-w-[80vw] bg-bgForm gap-3 rounded-full px-[14px] py-[12px]">
                      <Image src={search} alt="Search logo Icon" width={30} height={30}></Image>
                      <input className="bg-transparent w-full outline-none font-normal text-base " placeholder="Busque pelas opções"></input>
                    </form>
                  </span>
                </div>
                <div className="hidden w-full sm:ml-2 sm:block">
                  <div className="flex h-full justify-center items-center gap-8">
                    <form action="" className="h-12 flex shadow-md ring-2 ring-descriptionField  text-[black] opacity-80 focus-within:ring-title hover:ring-title  sm:hidden md:flex w-full min-w-[250px] max-w-[50vw] bg-bgForm gap-3 rounded-full px-[16px] py-[14px]">
                      <Image src={search} alt="Search logo Icon" ></Image>
                      <input 
                        className="bg-transparent w-full outline-none font-normal text-base " 
                        placeholder="Encontre uma breja"
                        />
                    </form>
                    <form action="" className="h-12 max-w-[50vw]  shadow-md ring-2 ring-descriptionField  text-[black] opacity-80 focus-within:ring-title hover:ring-title w-full hidden text-sm md:hidden sm:flex  bg-bgForm gap-3 rounded-full px-[14px] py-[12px]">
                      <Image src={search} alt="Search logo Icon" width={30} height={30}></Image>
                      <input className="bg-transparent w-full outline-none font-normal text-base " placeholder="Encontre uma breja"></input>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>

          
          
    </nav>
  )
}

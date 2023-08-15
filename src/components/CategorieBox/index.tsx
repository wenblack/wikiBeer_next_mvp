import IpaIcon from  '@/assets/images/IPA.png'
import WeissIcon from '@/assets/images/Weiss.png'
import LagerIcon from '@/assets/images/Lager.png'
import Image from 'next/image'

interface CategorieProps {
    name: 'IPA'| 'Weiss' | 'Lager'
}
export function CategorieBox ({name}:CategorieProps){

    if(name === 'IPA'){
        return(
            <>
              <a  href='#' className=' hover:opacity-70 hidden md:flex bg-redButton text-white rounded-2xl font-semibold px-8 gap-1 h-16 items-center self-center flex-grow'>
                <Image className='h-14 w-14' src={IpaIcon} alt='Beer categorie icon'/>
                <p> Pale Ale/IPA</p>
            </a>
            <a  href='#' className=' hover:opacity-70 flex md:hidden bg-redButton text-white rounded-2xl font-semibold px-2 gap-1 h-14 items-center self-center flex-grow'>
                <Image className='h-10 w-10' src={IpaIcon} alt='Beer categorie icon'/>
                <p> Pale Ale/IPA</p>
            </a>
            </>
        )
        }if(name === 'Weiss'){
            return(
                <>
                    <a  href='#' className=' hover:opacity-70 hidden md:flex bg-redButton text-white rounded-2xl font-semibold px-8 gap-1 h-16 items-center self-center flex-grow'>
                        <Image className='h-14 w-14' src={WeissIcon} alt='Beer categorie icon'/>
                        <p> Weiss/WitBier</p>
                    </a>
                    <a  href='#' className=' hover:opacity-70 flex md:hidden bg-redButton text-white  rounded-2xl font-semibold px-2 gap-1 h-14 items-center self-center flex-grow'>
                        <Image className='h-10 w-10' src={WeissIcon} alt='Beer categorie icon'/>
                        <p>Weiss/WitBier</p>
                    </a>
                </>
            )
            }else{
                return(
                    <>
                    <a  href='#' className=' hover:opacity-70 hidden md:flex bg-redButton text-white rounded-2xl font-semibold px-8 gap-1 h-16 items-center self-center flex-grow'>
                        <Image className='h-14 w-14' src={LagerIcon} alt='Beer categorie icon'/>
                        <p> Pilsen/Lager</p>
                    </a>
                    
                    <a  href='#' className=' hover:opacity-70 flex md:hidden bg-redButton text-white rounded-2xl font-semibold px-2 gap-1 h-14 items-center self-center flex-grow'>
                        <Image className='h-10 w-10' src={LagerIcon} alt='Beer categorie icon'/>
                        <p>Pilsen/Lager</p>
                    </a>
                    </>
                )
            }

    }
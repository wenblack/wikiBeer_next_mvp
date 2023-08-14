import { Heading } from "../Heading"
import { Beer } from "../Beer"
import leftIcon from '../../assets/svg/CaretLeft.svg'
import rightIcon from '../../assets/svg/CaretRight.svg'
import Image from "next/image"
import { UserContext } from "@/hooks/UserContext"
import { useContext } from "react"
import { api } from "@/services/api"

interface CategorieListProps {
  id: string
  categorie:string
}

export function BeerList({ id, categorie }: CategorieListProps) {
    const {state} = useContext(UserContext)

  function scrollLeft() {
      let value = document.getElementById(String(id))
      if (value) {
        value.scrollLeft += 116
      }
    }
 
  function scrollRight() {
    let value = document.getElementById(String(id))
    if (value) {
      value.scrollLeft -= 116
    }
  }
  

  return (
    <section className='flex flex-col  w-full'>
      <span className='flex ml-16 lg:ml-28 w-screen mb-10 '>
        <Heading h1 value={categorie} />
      </span>
      <div className='flex w-screen  h-full'>
        <button
          onClick={scrollRight}
          className='h-8 lef-0 absolute rounded-full sm:flex items-center px-2 self-center text-white hover:opacity-100  bg-redButton opacity-60 '
        >
          <Image src={leftIcon} alt="Arrow left Icon" />
        </button>
        <ul id={id} className='flex hide no-scrollbar pb-4 overflow-scroll ml-16 sm:ml-16 sm:pr-8 md:pr-8 '>
            <li >
                <Beer
                    name="Heineken"
                    ratings={[5]} 
                    category="Premium Lager"
                    imgUrl="./files/beers/heineken.png" 
                />
            </li>
            <li>
                <Beer
                    name="Eisenbahn"
                    ratings={[4, 4, 3, 5, 4]} 
                    category="Lager"
                    imgUrl="./files/beers/eisenbahn.png" 
                />
            </li>
            <li>
                <Beer
                    name="Eisenbahn"
                    ratings={[4, 4, 3, 5, 4]} 
                    category="IPA"
                    imgUrl="./files/beers/eisenbahn_ipa.png" 
                />
            </li>
            <li>
               <Beer
                    name="Heineken Zero"
                    ratings={[5]} 
                    category="Premium Lager"
                    imgUrl="./files/beers/heineken-00.png" 
                />
            </li>
            <li>
                <Beer
                    name="Eisenbahn"
                    ratings={[4, 4, 3, 5, 4]} 
                    category="Session IPA"
                    imgUrl="./files/beers/eisenbahn-session-ipa.png" 
                />
            </li>
            <li >
                <Beer
                    name="Heineken"
                    ratings={[5]} 
                    category="Premium Lager"
                    imgUrl="./files/beers/heineken.png" 
                />
            </li>
            <li>
                <Beer
                    name="Eisenbahn"
                    ratings={[4, 4, 3, 5, 4]} 
                    category="Lager"
                    imgUrl="./files/beers/eisenbahn.png" 
                />
            </li>
            <li>
                <Beer
                    name="Eisenbahn"
                    ratings={[4, 4, 3, 5, 4]} 
                    category="IPA"
                    imgUrl="./files/beers/eisenbahn_ipa.png" 
                />
            </li>
            <li>
               <Beer
                    name="Heineken Zero"
                    ratings={[5]} 
                    category="Premium Lager"
                    imgUrl="./files/beers/heineken-00.png" 
                />
            </li>
            <li>
                <Beer
                    name="Eisenbahn"
                    ratings={[4, 4, 3, 5, 4]} 
                    category="Session IPA"
                    imgUrl="./files/beers/eisenbahn-session-ipa.png" 
                />
            </li>
        
        </ul>
        <button onClick={scrollLeft} 
        className='absolute right-0 h-8 rounded-full sm:flex items-center px-2 self-center hover:opacity-100 text-white   bg-redButton opacity-60 '
        >
          <Image src={rightIcon} alt="Arrow right Icon" />
        </button>
      </div>
    </section>

  )
}
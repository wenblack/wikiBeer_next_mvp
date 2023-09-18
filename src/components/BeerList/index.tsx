import { Heading } from "../Heading"
import { Beer } from "../Beer"
import leftIcon from '../../assets/svg/CaretLeft.svg'
import rightIcon from '../../assets/svg/CaretRight.svg'
import Image from "next/image"
import { UserContext } from "@/hooks/UserContext"
import { useContext } from "react"
import { BeerProps } from "@/utils/BeerInterface"
import { useRouter } from "next/router"

interface CategorieListProps {
  categorieName: string,
  beers: BeerProps[]
}

export function BeerList({
  categorieName,
  beers
}: CategorieListProps,
) {
  const { state } = useContext(UserContext)
  const router = useRouter()

  function scrollLeft() {
    let value = document.getElementById(categorieName)
    if (value) {
      value.scrollLeft += 116
    }
  }

  function scrollRight() {
    let value = document.getElementById(categorieName)
    if (value) {
      value.scrollLeft -= 116
    }
  }

  return (
    <section className='flex flex-col  w-full'>
      <span className='flex ml-16 capitalize lg:ml-28 w-screen mb-10 '>
        <Heading h1 value={categorieName} />
      </span>
      <div className='flex w-screen  h-full'>
        <button
          onClick={scrollRight}
          className='h-8 lef-0 absolute rounded-full sm:flex items-center px-2 self-center text-white hover:opacity-100  bg-button opacity-60 '
        >
          <Image src={leftIcon} alt="Arrow left Icon" />
        </button>
        <ul id={categorieName} className='flex hide no-scrollbar pb-4 overflow-scroll ml-16 sm:ml-16 sm:pr-8 md:pr-8 '>
          {beers.map((beer) =>
            <li key={beer.id}>
              <Beer
                click={() => router.push(`details/${beer.name}`)}
                name={beer.name}
                ABV={beer.ABV}
                IBU={beer.IBU}
                id={beer.id}
                imageUrl={beer.imageUrl}
                rating={beer.rating}
                Notes={beer.Notes}
                description={beer.description}
                reviews={beer.reviews}
                categorie={beer.categorie}
                categorieId={beer.categorieId}
              />
            </li>
          )}
        </ul>
        <button
          onClick={scrollLeft}
          className='absolute right-0 h-8 rounded-full sm:flex items-center px-2 self-center hover:opacity-100 text-white   bg-button opacity-60 '
        >
          <Image src={rightIcon} alt="Arrow right Icon" />
        </button>
      </div>
    </section>

  )
}
import { Heading } from "../Heading"
import { UserContext } from "@/hooks/UserContext"
import { useContext } from "react"
import { BeerProps } from "@/utils/BeerInterface"
import { useRouter } from "next/router"
import { ResultItem } from "../ResultItem"

interface CategorieListProps {
  categorieName: string,
  beers: BeerProps[]
}

export function ResultList({
  categorieName,
  beers
}: CategorieListProps,
) {
  const { state } = useContext(UserContext)
  const router = useRouter()

  return (
    <section className='flex flex-col'>
      <span className='flex ml-8 capitalize lg:ml-28  mb-10 '>
        <Heading h1 value={categorieName} />
      </span>
      <div className='flex w-full   h-full'>
        <ul id={categorieName} className='flex   flex-col hide no-scrollbar pb-4 overflow-scroll ml-8 sm:ml-8 sm:pr-8 md:pr-8 '>
          {beers.map((beer) =>
            <li key={beer.id}>
              <ResultItem
                click={() => router.push(`/details/${beer.name}`)}
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
      </div>
    </section>

  )
}
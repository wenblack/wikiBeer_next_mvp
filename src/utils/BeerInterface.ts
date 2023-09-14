export interface BeerProps {
  id: string,
  name: string,
  description?: string
  imageUrl: string
  rating: number
  IBU: number,
  ABV: number,
  categorieId:string
  reviews?: [
    {
      Title: string
      content: string
    },
  ],
  categorie:
  {
    name: string
  },
  Notes?: [
    {
      note: number
    }
  ]
}
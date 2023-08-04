// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

//Create fake api data with chatGPT
const beers = [
  {
    name: "Heineken",
    family: "Pale Lager",
    rating: 4.2,
    shortdescription: "A well-known Dutch lager",
    history: "First brewed in 1873 in the Netherlands, Heineken has become one of the most popular and recognizable beer brands worldwide.",
    imageUrl: "https://example.com/heineken.jpg",
    reviews: [
      {
        username: "BeerLover123",
        rating: 4.5,
        comment: "Classic and refreshing, always a go-to choice."
      },
      {
        username: "HopHead84",
        rating: 3.8,
        comment: "Decent lager, but I prefer more hoppy brews."
      }
    ]
  },
  {
    name: "La Fin du Monde",
    family: "Tripel",
    rating: 4.7,
    shortdescription: "A Canadian abbey-style ale",
    history: "Brewed by Unibroue in Quebec, Canada, La Fin du Monde (The End of the World) is a strong and flavorful tripel inspired by the brewing traditions of Belgian abbeys.",
    imageUrl: "https://example.com/la_fin_du_monde.jpg",
    reviews: [
      {
        username: "TripelTaster",
        rating: 4.9,
        comment: "Absolutely divine! A perfect balance of flavors."
      },
      {
        username: "AleAdventurer",
        rating: 4.2,
        comment: "Good beer, but not my favorite tripel. Still worth a try."
      }
    ]
  },
  {
    name: "Stella Artois",
    family: "Pale Lager",
    rating: 4.0,
    shortdescription: "A Belgian pilsner lager",
    history: "Brewed since 1926 in Leuven, Belgium, Stella Artois is a crisp and classic pilsner lager.",
    imageUrl: "https://example.com/stella_artois.jpg",
    reviews: []
  },
  {
    name: "Founders KBS",
    family: "Imperial Stout",
    rating: 4.8,
    shortdescription: "A bold and rich bourbon barrel-aged stout",
    history: "First released by Founders Brewing Co. in 2003, Kentucky Breakfast Stout (KBS) is highly sought after for its intense flavors and aging potential.",
    imageUrl: "https://example.com/founders_kbs.jpg",
    reviews: []
  },
  {
    name: "Birra Moretti",
    family: "Pale Lager",
    rating: 4.3,
    shortdescription: "An Italian lager with a balanced taste",
    history: "Birra Moretti has been brewed since 1859 in Udine, Italy, and has gained popularity worldwide for its smooth and easy-drinking profile.",
    imageUrl: "https://example.com/birra_moretti.jpg",
    reviews: []
  },
];



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({result : beers})
}

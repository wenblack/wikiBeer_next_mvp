import type { NextApiRequest, NextApiResponse } from 'next'


const beers = [
  {
    "id": "clly1s5c6000amwesmvhu48gi",
    "name": "midway goose island",
    "description": "água,malte e lúpulo",
    "imageUrl": "clly1s5c6000amwesmvhu48gi.png",
    "rating": 5,
    "IBU": 45,
    "ABV": 6,
    "createdAt": "2023-08-30T18:05:17.959Z",
    "categorieId": "clly1lkd40006mwesjb4l7bf5"
  },
  {
    "id": "clly1tajk000bmwess07puf07",
    "name": "Lagunitas",
    "description": "água,malte e lúpulo",
    "imageUrl": "clly1tajk000bmwess07puf07.png",
    "rating": 5,
    "IBU": 51,
    "ABV": 6,
    "createdAt": "2023-08-30T18:06:11.360Z",
    "categorieId": "clly1lkd40006mwesjb4l7bf5"
  },
  {
    "id": "clly1xkwh000emwesx15j9zm0",
    "name": "eisenbahn pale ale",
    "description": "água, malte e lúpulo",
    "imageUrl": "clly1xkwh000emwesx15j9zm0.png",
    "rating": 4,
    "IBU": 45,
    "ABV": 6,
    "createdAt": "2023-08-30T18:09:31.409Z",
    "categorieId": "clly1lq5k0007mwesz3ucq3hv"
  }
];



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({result : beers})
}

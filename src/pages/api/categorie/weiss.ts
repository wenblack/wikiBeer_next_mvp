import type { NextApiRequest, NextApiResponse } from 'next'


const beers = [
  {
    "id": "clly1u5uo000cmwesvqbnzhne",
    "name": "erdinger",
    "description": "água,malte e lúpulo",
    "imageUrl": "clly1u5uo000cmwesvqbnzhne.png",
    "rating": 5,
    "IBU": 11,
    "ABV": 6,
    "createdAt": "2023-08-30T18:06:51.936Z",
    "categorieId": "clly1l1b70004mwesbdgdhhbc"
  },
  {
    "id": "clly1v5qw000dmwes92qq2uqr",
    "name": "paulaner",
    "description": "água,malte e lúpulo",
    "imageUrl": "clly1v5qw000dmwes92qq2uqr.png",
    "rating": 5,
    "IBU": 51,
    "ABV": 6,
    "createdAt": "2023-08-30T18:07:38.456Z",
    "categorieId": "clly1l1b70004mwesbdgdhhbc"
  },
  {
    "id": "clly1o8tv0008mwes07ih1ow7",
    "name": "hoengarden",
    "description": "água,malte e lúpulo",
    "imageUrl": "clly1o8tv0008mwes07ih1ow7.png",
    "rating": 5,
    "IBU": 12,
    "ABV": 4,
    "createdAt": "2023-08-30T18:02:15.859Z",
    "categorieId": "clly1le350005mwesd35p0bh4"
  },
  {
    "id": "clly1pzms0009mwesr5lvrd95",
    "name": "baden banden witbier",
    "description": "água,malte e lúpulo",
    "imageUrl": "clly1pzms0009mwesr5lvrd95.png",
    "rating": 3,
    "IBU": 13,
    "ABV": 0,
    "createdAt": "2023-08-30T18:03:37.253Z",
    "categorieId": "clly1le350005mwesd35p0bh4"
  }
];



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({result : beers})
}

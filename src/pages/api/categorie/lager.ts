import type { NextApiRequest, NextApiResponse } from 'next'


const beers = [
  {
    "id": "clly0rpfm0001mwesa9hmyh6f",
    "name": "heineken",
    "description": "água,malte e lúpulo",
    "imageUrl": "clly0rpfm0001mwesa9hmyh6f.png",
    "rating": 4,
    "IBU": 19,
    "ABV": 4,
    "createdAt": "2023-08-30T17:36:57.731Z",
    "categorieId": "clly0riw70000mwese8gq5ytv"
  },
  {
    "id": "clly1kalp0003mwesmtasx13l",
    "name": "stella artois",
    "description": "água,malte e lúpulo",
    "imageUrl": "clly1kalp0003mwesmtasx13l.png",
    "rating": 4,
    "IBU": 14,
    "ABV": 5,
    "createdAt": "2023-08-30T17:59:11.534Z",
    "categorieId": "clly0riw70000mwese8gq5ytv"
  }
];



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({result : beers})
}

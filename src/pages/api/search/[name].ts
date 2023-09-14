import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { name } = req.query
  let searchParams = String(name);
  
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
      "categorieId": "clly0riw70000mwese8gq5ytv",
      "reviews": [
        {
          "id": "clly0v1cl0002mwes6f87tbdj",
          "Title": "The best beer",
          "content": "This is the nest beer ever!",
          "userId": "5fca049e-f74f-4812-95fc-7ff07fd4c670",
          "beerId": "clly0rpfm0001mwesa9hmyh6f",
          "createdAt": "2023-08-30T17:39:33.142Z"
        },
        {
          "id": "clm5bi9r70001mwbya8oyeece",
          "Title": "Review test 1",
          "content": "This is a review example made by post",
          "userId": "5fca049e-f74f-4812-95fc-7ff07fd4c670",
          "beerId": "clly0rpfm0001mwesa9hmyh6f",
          "createdAt": "2023-09-04T20:11:56.515Z"
        }
      ],
      "categorie": {
        "id": "clly0riw70000mwese8gq5ytv",
        "name": "lager"
      },
      "Notes": [
        {
          "id": "0dbb40da-ff82-439f-9539-dc7839148666",
          "beerId": "heineken",
          "userId": "5fca049e-f74f-4812-95fc-7ff07fd4c670",
          "note": 5
        },
        {
          "id": "40bfcc92-5070-4d34-b565-1a00d66fc3b7",
          "beerId": "heineken",
          "userId": "5fca049e-f74f-4812-95fc-7ff07fd4c670",
          "note": 4
        },
        {
          "id": "5a937eb7-13c8-400b-855b-4c4128329f76",
          "beerId": "heineken",
          "userId": "5fca049e-f74f-4812-95fc-7ff07fd4c670",
          "note": 3
        }
      ]
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
      "categorieId": "clly0riw70000mwese8gq5ytv",
      "reviews": [
        {
          "id": "clly2tdsx000fmwesnznsftxm",
          "Title": "better than heineken",
          "content": "Awesome beer!",
          "userId": "5fca049e-f74f-4812-95fc-7ff07fd4c670",
          "beerId": "clly1kalp0003mwesmtasx13l",
          "createdAt": "2023-08-30T18:34:15.201Z"
        }
      ],
      "categorie": {
        "id": "clly0riw70000mwese8gq5ytv",
        "name": "lager"
      },
      "Notes": [

      ]
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
      "categorieId": "clly1le350005mwesd35p0bh4",
      "reviews": [

      ],
      "categorie": {
        "id": "clly1le350005mwesd35p0bh4",
        "name": "witbier"
      },
      "Notes": [

      ]
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
      "categorieId": "clly1le350005mwesd35p0bh4",
      "reviews": [

      ],
      "categorie": {
        "id": "clly1le350005mwesd35p0bh4",
        "name": "witbier"
      },
      "Notes": [

      ]
    },
    {
      "id": "clly1s5c6000amwesmvhu48gi",
      "name": "midway goose island",
      "description": "água,malte e lúpulo",
      "imageUrl": "clly1s5c6000amwesmvhu48gi.png",
      "rating": 5,
      "IBU": 45,
      "ABV": 6,
      "createdAt": "2023-08-30T18:05:17.959Z",
      "categorieId": "clly1lkd40006mwesjb4l7bf5",
      "reviews": [

      ],
      "categorie": {
        "id": "clly1lkd40006mwesjb4l7bf5",
        "name": "ipa"
      },
      "Notes": [

      ]
    },
    {
      "id": "clly1tajk000bmwess07puf07",
      "name": "lagunitas",
      "description": "água,malte e lúpulo",
      "imageUrl": "clly1tajk000bmwess07puf07.png",
      "rating": 5,
      "IBU": 51,
      "ABV": 6,
      "createdAt": "2023-08-30T18:06:11.360Z",
      "categorieId": "clly1lkd40006mwesjb4l7bf5",
      "reviews": [

      ],
      "categorie": {
        "id": "clly1lkd40006mwesjb4l7bf5",
        "name": "ipa"
      },
      "Notes": [

      ]
    },
    {
      "id": "clly1u5uo000cmwesvqbnzhne",
      "name": "erdinger",
      "description": "água,malte e lúpulo",
      "imageUrl": "clly1u5uo000cmwesvqbnzhne.png",
      "rating": 5,
      "IBU": 11,
      "ABV": 6,
      "createdAt": "2023-08-30T18:06:51.936Z",
      "categorieId": "clly1l1b70004mwesbdgdhhbc",
      "reviews": [

      ],
      "categorie": {
        "id": "clly1l1b70004mwesbdgdhhbc",
        "name": "weiss"
      },
      "Notes": [

      ]
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
      "categorieId": "clly1l1b70004mwesbdgdhhbc",
      "reviews": [

      ],
      "categorie": {
        "id": "clly1l1b70004mwesbdgdhhbc",
        "name": "weiss"
      },
      "Notes": [

      ]
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
      "categorieId": "clly1lq5k0007mwesz3ucq3hv",
      "reviews": [

      ],
      "categorie": {
        "id": "clly1lq5k0007mwesz3ucq3hv",
        "name": "pale ale"
      },
      "Notes": [

      ]
    }
  ];

  var result = beers.filter(option => option.name.includes(searchParams));
  let total = result.length

  if (total === 0) {
    return res.status(404).json({ result: 'Beer not Found' })
  }
  return res.status(200).json({ data: result })
}

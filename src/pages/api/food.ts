// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const food = [
  {
    name: "Salada Ravanello",
    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
    price: 49.97,
    ingredients: ["alface", "tomate", "rabanete", "pão naan"]
  },
  {
    name: "Torradas de Parma",
    description: "Presunto de parma e rúcula em um pão com fermentação natural",
    price: 25.97,
    ingredients: ["pão", "presunto", "rúcula"]
  },
  {
    name: "Spaguetti Gambe",
    description: "Massa fresca com camarões e pesto",
    price: 79.97,
    ingredients: ["camarões", "massa", "pesto"]
  },
  {
    name: "Salada Molla  ",
    description: "Tomates, coentro, pepino, cebola roxa. Frescos e temperados.",
    price: 19.97,
    ingredients: ["alface", "tomate", "pepino"]
  },
  {
    name: "Prugna Pie",
    description: "Torta de ameixa com massa amanteigada, polvilho em açúcar",
    price: 49.97,
    ingredients: ["ameixa", "farinha"]
  },
  {
    name: "Peachy pastrie",
    description: "Delicioso folheado de pêssego com folhas de hortelã.",
    price: 35.97,
    ingredients: ["pêssego", "farinha"]
  },
  {
    name: "Macarons",
    description: "Farinha de amêndoas, manteiga, claras e açúcar",
    price: 75.97,
    ingredients: ["amêndoas", "claras"]
  },
  {
    name: "Bolo de damasco",
    description: "Damascos frescos em uma massa sem glúten",
    price: 19.97,
    ingredients: ["damasco", "farinha"]
  },
  {
    name: "Suco de maracujá",
    description: "Suco de maracujá gelado, cremoso, docinho",
    price: 32.97,
    ingredients: ["maracujá"]
  },
  {
    name: "Espresso",
    description: "Café cremoso feito na temperatura e pressões perfeitas",
    price: 49.97,
    ingredients: ["café"]
  },
  {
    name: "Tè d'autunno",
    description: "Chá de anis, canela e limão. Sinta o outono italiano",
    price: 19.97,
    ingredients: ["canela", "anis", "limão"]
  },
  {
    name: "Pomo bourbon",
    description: "Maçã, whisky, canela. On the rocks",
    price: 79.97,
    ingredients: ["canela", "whisky", "maçã"]
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(
    food
  )
}

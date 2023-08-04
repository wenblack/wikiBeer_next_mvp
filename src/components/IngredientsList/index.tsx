import Image from "next/image";
import alface from '../../assets/images/alface.png'
import bread from '../../assets/images/breadnann.png'
import rabanet from '../../assets/images/rabanet.png'
import tomate from '../../assets/images/tomate.png'
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['700', '600', '500','400'] })

export function IngredientsList (){ 
    return(
    <ul className={`flex gap-4   items-center  ${poppins.className}`}>
        <li className=" flex flex-col  items-center  justify-between  text-lg  ">
            <Image height={60} src={alface} alt="Ingredient Image"></Image>
            Alface
        </li>
        <li className=" flex flex-col   items-center justify-between  text-lg">
            <Image height={60} src={tomate} alt="Ingredient Image"></Image>
            Tomate
        </li>
        <li className=" flex flex-col   items-center justify-between text-lg">
            <Image height={60} src={rabanet} alt="Ingredient Image"></Image>
            Rabanete
        </li>
        <li className=" flex flex-col  items-center justify-between   text-lg">
            <Image height={60} src={bread} alt="Ingredient Image"></Image>
            Pão naan
        </li>

    </ul>
    )
}
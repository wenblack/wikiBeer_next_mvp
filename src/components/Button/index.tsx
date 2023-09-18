import Image from "next/image"
import { Poppins } from "next/font/google"
import { ButtonHTMLAttributes, MouseEventHandler } from "react"


interface ButtonProps {
    type?: "button" | "submit"
    number?: number
    categorie?: boolean
    value: string
    onclick?: MouseEventHandler
}

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })

export function Button({ onclick, type, number, categorie, value }: ButtonProps) {
    if (categorie) {
        return (
            <button className={`flex hover:opacity-80 h-12 w-[215px] text-white items-center  bg-bgbutton gap-3 rounded-lg justify-center py-[14px] bg-button ${poppins.className}`}>
                <span>
                    {value} ({number})
                </span>
            </button>
        )
    }
    return (
        <button onClick={onclick} type={type} className={`flex text-white  h-12 hover:opacity-80 w-[80vw]  max-w-[348px]  items-center bg-bgbutton gap-3 rounded-lg justify-center py-[14px] bg-button ${poppins.className}`}>
            <span>
                {value}
            </span>
        </button>
    )
}
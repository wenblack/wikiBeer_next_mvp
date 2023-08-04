import Image from "next/image";
import logo from '@/assets/images/logoWithName.png'
import { Poppins } from 'next/font/google'


const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })



export function Logo (){
    return (
            <>
                <Image className="mb-8" src={logo} alt="App polygon logo"></Image>
            </>
    )
}
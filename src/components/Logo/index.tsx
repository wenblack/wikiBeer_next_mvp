import Image from "next/image";
import logo from '../../assets/svg/explorerLogo.svg'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })



export function Logo (){
    return (
            <>
                <Image src={logo} alt="App polygon logo" width={30} height={30}></Image>
               <span className={`  ${poppins.className} `}>
                    food explorer
               </span>
            </>
    )
}
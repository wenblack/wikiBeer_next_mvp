import { Poppins } from "next/font/google"
import Image from "next/image"
import heroImage from '../../assets/images/heroImage.png'

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })

export function HeroSection (){
    return(
        <>
        <section className={` hidden lg:mt-[100px] sm:mt-8 md:mt-16 text-center  mb-16 sm:grid  lg:grid grid-cols-2 grid-rows-1 md:grid bg-gradient-to-r  grad to-[#091E26] from-[#00131C] max-h-[260px] min-h-[200px]  items-end overflow-visible bg-transparent   rounded-lg w-[80vw] self-center  text-white max-w-[1120px] ${poppins.className}`}>
            <Image src={heroImage} className="top-0  overflow-visible" alt="Image of coockies"></Image>  
            <span className="flex flex-col items-center justify-center self-center bottom-0 ">
                <h1 className="text-[40px] font-medium leading-[56px]">Sabores inigualáveis</h1> 
                <h3 className="font-normal text-base ">Sinta o cuidado do preparo com ingredientes selecionados</h3>   
            </span>
        </section>
        </>

    )
}
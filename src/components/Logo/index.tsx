import Image from "next/image";
import logo from '@/assets/images/logoWithName.png'
import logoWithouImage from '@/assets/images/logoWithoutName.png'
interface LogoProps {
    withoutImage?: boolean
}
export function Logo ({withoutImage}:LogoProps){
 
    if(withoutImage){
        return(
        
            <Image className="mb-8" src={logoWithouImage} alt="App polygon logo"></Image>
        )
    }
    return (
            <>
                <Image className="mb-8" src={logo} alt="App polygon logo"></Image>
            </>
    )
}
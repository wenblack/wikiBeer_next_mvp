import Image from 'next/image'
import { Poppins } from 'next/font/google'
import HomeIcon from '@/assets/svg/Home.svg'
import AccounIcon from '@/assets/svg/user.svg'
import RankingIcon from '@/assets/svg/Trophy.svg'
import BlogIcon from '@/assets/svg/blog.svg'

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })




export function Footer() {
  return (
    <nav
      className="flex fixed bottom-0 justify-around items-center  h-[12vh]  w-screen bg-redButton shadow-lg"
    >
       <ul className='flex w-[80vw] items-center justify-between'>
        <li><Image src={HomeIcon} alt='HomeIcon'/></li>
        <li><Image src={RankingIcon} alt='HomeIcon'/></li>
        <li><Image src={BlogIcon} alt='HomeIcon'/></li>
        <li><Image src={AccounIcon} alt='HomeIcon'/></li>
       </ul>
    </nav>
  )
}

import Image from "next/image"
import { Heading } from "../Heading"
import salad from '../../assets/images/salad.png'
import Link from "next/link"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ['latin'], weight: ['700', '600', '500'] })



export function ProductsList() {
    return (
        <div >
            <Heading h1={false} value="Meu pedido" />
            <ul className="mt-10">
                <li className="flex py-4  flex-row justify-start items-center ">
                    <Image width={72} height={72} alt="Product Image" src={salad} />
                    <div>
                        <span className="flex pl-4 text-xs items-center gap-4 ">
                            <h3 className={`${poppins.className} text-xl`}>1 x  Salada Radish</h3>
                            R$ 25,97
                        </span>
                        <Link className=" hover:text-white flex items-end pl-4 text-redButton text-xs" href={''}>Excluir</Link>
                    </div>
                </li>
                <li className="flex py-4  flex-row justify-start items-center ">
                    <Image width={72} height={72} alt="Product Image" src={salad} />
                    <div>
                        <span className="flex pl-4 text-xs items-center gap-4">
                            <h3 className={`${poppins.className} text-xl`}>1 x  Salada Radish</h3>
                            R$ 25,97
                        </span>
                        <Link className=" hover:text-white flex items-end pl-4 text-redButton text-xs" href={''}>Excluir</Link>
                    </div>
                </li>
                <li className="flex py-4   flex-row justify-start items-center ">
                    <Image width={72} height={72} alt="Product Image" src={salad} />
                    <div>
                        <span className="flex pl-4 text-xs items-center gap-4">
                            <h3 className={`${poppins.className} text-xl`}>1 x  Salada Radish</h3>
                            R$ 25,97
                        </span>
                        <Link className=" flex hover:text-white items-end pl-4 text-redButton text-xs" href={''}>Excluir</Link>
                    </div>
                </li>
                <li className="flex py-4  flex-row justify-start items-center ">
                    <Image width={72} height={72} alt="Product Image" src={salad} />
                    <div>
                        <span className="flex pl-4 text-xs items-center gap-4">
                            <h3 className={`${poppins.className} text-xl`}>1 x  Salada Radish</h3>
                            R$ 25,97
                        </span>
                        <Link className=" hover:text-white flex items-end pl-4 text-redButton text-xs" href={''}>Excluir</Link>
                    </div>
                </li>
            </ul>
            <span className={`${poppins.className} flex mt-4 text-sm`}>Total: R$ 103,88</span>
        </div>
    )
}
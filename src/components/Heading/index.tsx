import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '700', '600'] })


interface titleProps {
    h1: boolean
    value: string
}

export function Heading({ h1, value }: titleProps) {
    if (h1) {
        return (
            <h1 className={`font-medium   text-title text-3xl ${poppins.className} `}>
                {value}
            </h1>
        )
    }
    return (
        <h2 className={`font-medium  text-title text-3xl ${poppins.className} `}>
            {value}
        </h2>
    )
}
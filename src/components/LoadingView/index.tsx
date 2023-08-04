import { Heading } from "../Heading"
import { useRouter } from "next/router"

export function LoadingView() {
  const router = useRouter()
  return (
    <main className='flex bg-bgPrimary px-8 text-white gap-32 flex-col text-center h-screen w-screen items-center justify-center'>
      <Heading h1 value='Carregando ...'/>
    </main>
  )
}
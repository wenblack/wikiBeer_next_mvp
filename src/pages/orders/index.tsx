import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { Roboto_Flex } from 'next/font/google'
import { Auth } from '@/middlewares/Auth'

const roboto = Roboto_Flex({ subsets: ['latin'] })

export default function Orders() {
 
  return (
    <Auth>
      <div className={`flex h-screen overflow-hidden flex-col w-full   max-w-screen bg-bgPrimary ${roboto.className}`}>
      <header className='text-white'>
        <Header></Header>
      </header>
      <main className='flex  max-w-100vw overflow-y-auto bg-bgPrimary flex-col   items-center h-full pb-8 w-full'
      >
        <div className='pt-32  flex flex-col gap-8  '>
          <Heading h1 value='Pedidos' />
          <table className=' hidden   text-descriptionField  lg:table md:table  w-[80vw] text-start  md:text-center lg:text-center text-sm flex-grow-0 max-w-[1132px]'>
            <thead className='border   rounded-l-lg '>
              <tr className='table-row h-[64px] font-bold  '>
                <th className='border border-bgForm '>Status</th>
                <th className='border border-bgForm ' >Código</th>
                <th className='border border-bgForm '>Detalhamento</th>
                <th className='border border-bgForm '>Data e Hora</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border border-bgForm  h-[54px]'>
                <td className='border flex justify-center items-center h-[54px] gap-2 pl-3 border-bgForm '><span className=' rounded-full w-2 h-2 bg-redButton' />Pendente</td>
                <td className='border pl-3 border-bgForm '>00000004</td>
                <td><input type='text' className='w-full bg-transparent px-6' disabled value={'1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá'} /></td>
                <td className='border pl-3 border-bgForm ' >20/05 às 18h00</td>
              </tr>
              <tr className='border border-bgForm  h-[54px]'>
                <td className='border flex justify-center items-center h-[54px] gap-2 pl-3 border-bgForm'><span className=' rounded-full w-2 h-2 bg-[orange]' />Preparando</td>
                <td className='border pl-3 border-bgForm '>00000003</td>
                <td><input type='text' className=' w-full bg-transparent px-6' disabled value={'1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá'} /></td>
                <td className='border pl-3 border-bgForm ' >20/05 às 18h00</td>
              </tr>
              <tr className='border border-bgForm  h-[54px]'>
                <td className='border flex justify-center items-center h-[54px] gap-2 pl-3 border-bgForm '><span className=' rounded-full w-2 h-2 bg-[green]' />Entregue</td>
                <td className='border pl-3 border-bgForm '>00000002</td>
                <td><input type='text' className='w-full bg-transparent px-6 ' disabled value={'1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá'} /></td>
                <td className='border pl-3 border-bgForm ' >20/05 às 18h00</td>
              </tr>
              <tr className='border border-bgForm  h-[54px]'>
                <td className='border flex justify-center items-center h-[54px] gap-2 pl-3 border-bgForm '><span className=' rounded-full w-2 h-2 bg-[green]' />Entregue</td>
                <td className='border pl-3 border-bgForm '>00000001</td>
                <td><input type='text' className='w-full  bg-transparent px-6 ' disabled value={'1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá'} /></td>
                <td className='border pl-3 border-bgForm ' >20/05 às 18h00</td>
              </tr>
            </tbody>
          </table>
          <table className='  text-descriptionField  sm:table lg:hidden md:hidden  w-[80vw] text-center  md:text-center lg:text-center text-sm flex-grow-0 max-w-[1132px]'>
            <thead className=''>
              <tr className='table-row  h-[64px]'>
                <th className='border  border-bgForm '>Status</th>
                <th className='border border-bgForm '>Código</th>
                <th className='border border-bgForm '>Data e Hora</th>
              </tr>
            </thead>
            <tbody>
              <tr className='h-[54px]'>
                <td className='border flex justify-center items-center h-[54px] gap-2 pl-3 border-bgForm '><span className=' rounded-full w-2 h-2 bg-redButton' />Pendente</td>
                <td className='border pl-3 border-bgForm '>00000004</td>
                <td className='border pl-3 border-bgForm ' >20/05 às 18h00</td>
              </tr>
              <tr className='h-[54px]'>
                <td className='border flex justify-center items-center h-[54px] gap-2 pl-3 border-bgForm'><span className=' rounded-full w-2 h-2 bg-[orange]' />Preparando</td>
                <td className='border pl-3 border-bgForm '>00000003</td>
                <td className='border pl-3 border-bgForm ' >20/05 às 18h00</td>
              </tr>
              <tr className='h-[54px]'>
                <td className='border flex justify-center items-center h-[54px] gap-2 pl-3 border-bgForm '><span className=' rounded-full w-2 h-2 bg-[green]'></span>Entregue</td>
                <td className='border pl-3 border-bgForm '>00000002</td>
                <td className='border pl-3 border-bgForm ' >20/05 às 18h00</td>
              </tr>
              <tr className='h-[54px]'>
                <td className='border flex justify-center items-center h-[54px] gap-2 pl-3 border-bgForm '><span className=' rounded-full w-2 h-2 bg-[green]' />Entregue</td>
                <td className='border pl-3 border-bgForm '>00000001</td>
                <td className='border pl-3 border-bgForm ' >20/05 às 18h00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer className='bottom-0  w-screen '>
        <Footer></Footer>
      </footer>
    </div>
    </Auth>   
  )
}

import { useState } from "react"
import pixLogo from '../../assets/svg/pix.svg'
import Image from "next/image"
import creditCardLogo from '../../assets/svg/CreditCard.svg'
import qrCode from '../../assets/svg/qrCode.svg'
import { Input } from "../Input"
import { Button } from "../Button"
import { Heading } from "../Heading"
import clock from '../../assets/svg/clock.svg'
import check from '../../assets/svg/Check.svg'
import forknife from '../../assets/svg/forknife.svg'
import { useRouter } from "next/router"

interface orderProps {
  status?: string
}

export function PaymentView({ status }: orderProps) {
  const [page, setPage] = useState('')
  const router = useRouter()

  function setTabOne() {
    setPage('pix')
  }
  function setTabTwo() {
    setPage('creditCard')
  }
  function setStatusToPending(e: any) {
    e.preventDefault()
    router.push('/order/11111?status=pending')
  }

  if (page === 'pix') {
    return (
      <>
        <span className="flex w-[80vw] max-w-[80%] mb-8 justify-start items-center">
          <Heading value="Pagamentos" h1={false} />
        </span>

        <nav className="flex w-[80vw]  rounded-t-md text-title border-bgForm max-w-[80%] z-0  border   " aria-label="Tabs" role="tablist">
          <button
            type="button"
            className="  bg-bgSecondary  h-[81px] border-b-white border-bgForm hover:opacity-70   min-w-0 flex-1 first:border-l-0 border-l border-b-2 py-4 px-4   text-sm font-medium text-center   focus:z-10   active"
            id="bar-with-underline-item-1"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
            onClick={setTabOne}
          >
            <span className="h-full text-title gap-4 justify-center items-center w-full flex">
              <Image src={pixLogo} alt="Pix payment logo" />
              PIX
            </span>
          </button>

          <button
            type="button"
            className=" hover:opacity-70 h-[81px]   border-bgForm  min-w-0 flex-1 first:border-l-0 border-l border-b-0 py-4 px-4   text-sm font-medium text-center   focus:z-10"
            id="bar-with-underline-item-1"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
            onClick={setTabTwo}
          >
            <span className="h-full text-white gap-4 justify-center items-center w-full flex">
              <Image src={creditCardLogo} alt="Pix payment logo" />
              Crédito
            </span>
          </button>

        </nav>

        <div className=" flex justify-center items-center border border-bgForm w-[80vw] h-[364px]  max-w-[80%]">
          <div
            id="bar-with-underline-1"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-1"
          >
            <Image src={qrCode} alt="Qr Code for payment"></Image>
          </div>
        </div>
      </>
    )
  } else if (status === 'pending') {
    return (
      <>
        <span className="flex w-[80vw] max-w-[80%] mb-8 justify-start items-center">
          <Heading value="Pagamentos" h1={false} />
        </span>

        <nav className="  flex w-[80vw] rounded-t-md text-title border-bgForm max-w-[80%] z-0  border   " aria-label="Tabs" role="tablist">
          <button
            type="button"
            className=" cursor-not-allowed hover:opacity-70 h-[81px]   border-bgForm  min-w-0 flex-1 first:border-l-0 border-l border-b-0 py-4 px-4   text-sm font-medium text-center   focus:z-10"
            id="bar-with-underline-item-1"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
          >
            <span className="h-full text-title gap-4 justify-center items-center w-full flex">
              <Image src={pixLogo} alt="Pix payment logo" />
              PIX
            </span>
          </button>

          <button
            type="button"
            className=" cursor-not-allowed  hover:opacity-70 h-[81px]   border-bgForm  min-w-0 flex-1 first:border-l-0 border-l border-b-0 py-4 px-4   text-sm font-medium text-center   focus:z-10"
            id="bar-with-underline-item-1"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
          >
            <span className="h-full text-white gap-4 justify-center items-center w-full flex">
              <Image src={creditCardLogo} alt="Pix payment logo" />
              Crédito
            </span>
          </button>

        </nav>

        <div className=" flex justify-center items-center border border-bgForm w-[80vw]  h-[364px] max-w-[80%]">
          <div
            id="bar-with-underline-1"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-1"
            className="flex flex-col   my-8 items-center justify-center"
          >
            <Image src={clock} alt="Clock Image"></Image>
            <h2 className=" flex p-8 text-center text-2xl w-full  text-descriptionField">Aguardando pagamento no caixa</h2>
          </div>
        </div>
      </>
    )
  } else if (status === 'accept') {
    return (
      <>
        <span className="flex w-[80vw] max-w-[80%] mb-8 justify-start items-center">
          <Heading value="Pagamentos" h1={false} />
        </span>

        <nav className="  flex w-[80vw] rounded-t-md text-title border-bgForm max-w-[80%] z-0  border   " aria-label="Tabs" role="tablist">
          <button
            type="button"
            className=" cursor-not-allowed hover:opacity-70 h-[81px]   border-bgForm  min-w-0 flex-1 first:border-l-0 border-l border-b-0 py-4 px-4   text-sm font-medium text-center   focus:z-10"
            id="bar-with-underline-item-1"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
          >
            <span className="h-full text-title gap-4 justify-center items-center w-full flex">
              <Image src={pixLogo} alt="Pix payment logo" />
              PIX
            </span>
          </button>

          <button
            type="button"
            className=" cursor-not-allowed  hover:opacity-70 h-[81px]   border-bgForm  min-w-0 flex-1 first:border-l-0 border-l border-b-0 py-4 px-4   text-sm font-medium text-center   focus:z-10"
            id="bar-with-underline-item-1"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
          >
            <span className="h-full text-white gap-4 justify-center items-center w-full flex">
              <Image src={creditCardLogo} alt="Pix payment logo" />
              Crédito
            </span>
          </button>

        </nav>

        <div className=" flex justify-center items-center border border-bgForm w-[80vw] h-[364px] max-w-[80%]">
          <div
            id="bar-with-underline-1"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-1"
            className="flex flex-col   my-8 items-center justify-center"
          >
            <Image src={check} alt="Check Icon Image"></Image>
            <h2 className=" flex p-0  sm:p-8 text-center text-2xl w-full  text-descriptionField">
              Pagamento aprovado!
            </h2>
          </div>
        </div>
      </>
    )
  } else if (status === 'delivered') {
    return (
      <>
        <span className="flex w-[80vw] max-w-[80%] mb-8 justify-start items-center">
          <Heading value="Pagamentos" h1={false} />
        </span>

        <nav className="  flex w-[80vw] rounded-t-md text-title border-bgForm max-w-[80%] z-0  border   " aria-label="Tabs" role="tablist">
          <button
            type="button"
            className=" cursor-not-allowed hover:opacity-70 h-[81px]   border-bgForm  min-w-0 flex-1 first:border-l-0 border-l border-b-0 py-4 px-4   text-sm font-medium text-center   focus:z-10"
            id="bar-with-underline-item-1"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
          >
            <span className="h-full text-title gap-4 justify-center items-center w-full flex">
              <Image src={pixLogo} alt="Pix payment logo" />
              PIX
            </span>
          </button>

          <button
            type="button"
            className=" cursor-not-allowed  hover:opacity-70 h-[81px]   border-bgForm  min-w-0 flex-1 first:border-l-0 border-l border-b-0 py-4 px-4   text-sm font-medium text-center   focus:z-10"
            id="bar-with-underline-item-1"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
          >
            <span className="h-full text-white gap-4 justify-center items-center w-full flex">
              <Image src={creditCardLogo} alt="Pix payment logo" />
              Crédito
            </span>
          </button>

        </nav>

        <div className=" flex justify-center items-center border border-bgForm w-[80vw]  h-[364px] max-w-[80%]">
          <div
            id="bar-with-underline-1"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-1"
            className="flex flex-col   my-8 items-center justify-center"
          >
            <Image src={forknife} alt="Fork and Knife Icon Image"></Image>
            <h2 className=" flex p-0  sm:p-8 text-center text-2xl w-full  text-descriptionField">
              Pedido entregue!
            </h2>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <span className="flex w-[80vw] max-w-[80%] mb-8 justify-start items-center">
        <Heading value="Pagamentos" h1={false} />
      </span>
      <nav className="flex rounded-t-md w-[80vw] max-w-[80%] z-0  border   border-bgForm" aria-label="Tabs" role="tablist">
        <button
          type="button"
          className=" hover:opacity-70 h-[81px]   border-bgForm  min-w-0 flex-1 first:border-l-0 border-l border-b-0 py-4 px-4   text-sm font-medium text-center   focus:z-10"
          id="bar-with-underline-item-1"
          data-hs-tab="#bar-with-underline-1"
          aria-controls="bar-with-underline-1"
          role="tab"
          onClick={setTabOne}
        >
          <span className="h-full text-white gap-4 justify-center items-center w-full flex">
            <Image src={pixLogo} alt="Pix payment logo" />
            PIX
          </span>
        </button>

        <button
          type="button"
          className="  bg-bgSecondary h-[81px] border-b-white border-bgForm hover:opacity-70  relative min-w-0 flex-1 first:border-l-0 border-l border-b-2 py-4 px-4   text-sm font-medium text-center   focus:z-10   active"
          id="bar-with-underline-item-2"
          data-hs-tab="#bar-with-underline-2"
          aria-controls="bar-with-underline-2"
          role="tab"
          onClick={setTabTwo}

        >
          <span className="h-full text-white gap-4 justify-center items-center w-full flex">
            <Image src={creditCardLogo} alt="Pix payment logo" />
            Crédito
          </span>
        </button>

      </nav>

      <div className=" flex justify-center border-bgForm items-center border w-[80vw] h-[364px]  max-w-[80%] ">
        <div
          id="bar-with-underline-1"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-1"
          className="flex items-center flex-col gap-5 px-2"
        >
          <Input
            label="Número do Cartão"
            value="0000 0000 0000 0000"
            cardNumber
          />
          <span className="flex w-full justify-between  mb-5">
            <Input type="text" label="Validade" value="04/25" validateMonth />
            <Input type="number" label="CVC" value="000" cvc />
          </span>
          <span className="w-full flex max-w-[60vw]">
            <Button onclick={setStatusToPending} value="Finalizar Pagamento" />
          </span>
        </div>
      </div>
    </>
  )
}

import { ChangeEventHandler, EventHandler, FormEventHandler, HTMLInputTypeAttribute, InputHTMLAttributes } from "react"

interface inputProps {
    value: string
    label: string
    type?: HTMLInputTypeAttribute
    cvc?: boolean
    cardNumber?: boolean
    validateMonth?: boolean
    loginForm?: boolean
    change?: ChangeEventHandler
    submit?: FormEventHandler<HTMLFormElement>
}

const id = String(Math.floor(Math.random() * 100))

export function Input({ submit, value, label, type, cardNumber, cvc, validateMonth, loginForm, change }: inputProps) {
    if (cvc) {
        return (
            <div className="flex flex-col gap-2 ">
                <label >{label}</label>
                <form
                    onSubmit={submit}
                    className="flex  hover:opacity-70 focus-within:ring-1 ring-white font-normal w-[25vw] border-title border  max-w-[166px] h-12 bg-transparent gap-3 rounded-lg p-[14px]">
                    <input onChange={change} type='number' pattern="\d\d\d" required className="bg-transparent  w-full outline-none font-normal text-base " placeholder={value}></input>
                </form>
            </div >
        )
    }

    if (validateMonth) {
        return (
            <div className="flex flex-col gap-2 ">
                <label >{label}</label>
                <form onSubmit={submit} className="flex hover:opacity-70 border-title border focus-within:ring-1 ring-white font-normal w-[25vw]  max-w-[166px] h-12 bg-transparent gap-3 rounded-lg pl-[14px]">
                    <input onChange={change} type='text' pattern="\d\d/\d\d" required className="bg-transparent  w-full outline-none font-normal text-base " placeholder={value}></input>
                </form>
            </div >
        )
    }

    if (cardNumber) {
        return (
            <div className="flex flex-col gap-2 ">
                <label >{label}</label>
                <form onSubmit={submit} className="flex hover:opacity-70 border-title border focus-within:ring-1 ring-white font-normal w-[60vw]  max-w-[348px] h-12 bg-transparent gap-3 rounded-lg pl-[14px]">
                    <input onChange={change} type='text' pattern="\d\d\d\d\s\d\d\d\d\s\d\d\d\d\s\d\d\d\d" required className="bg-transparent  w-full outline-none font-normal text-base " placeholder={value}></input>
                </form>
            </div >
        )
    }

    if (loginForm) {
        return (
            <div className="flex flex-col gap-2 ">
                <label >{label}</label>
                <form onSubmit={submit} className="flex hover:opacity-70 border border-title focus-within:ring-1 focus-within:border-none ring-priceBlue font-normal w-[80vw]  max-w-[348px] h-12 bg-bgForm gap-3 rounded-lg pl-[14px]">
                    <input onChange={change} type={type} required className="bg-transparent  w-full outline-none font-normal text-base " placeholder={value}></input>
                </form>
            </div >
        )
    }
    return (
        <div className="flex flex-col gap-2 ">
            <label >{label}</label>
            <form onSubmit={submit} className="flex hover:opacity-70  focus-within:ring-1 ring-white font-normal w-[80vw]  max-w-[348px] h-12 bg-bgForm gap-3 rounded-lg pl-[14px]">
                <input type={type} required className="bg-transparent  w-full outline-none font-normal text-base " placeholder={value}></input>
            </form>
        </div >
    )
}
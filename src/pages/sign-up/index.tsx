import { Poppins } from 'next/font/google'
import { Input } from '@/components/Input'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Alert from 'sweetalert2'

const poppins = Poppins({ subsets: ['latin'], weight: ['700', '600', '500'] })

export default function SignUp() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const router = useRouter()

  const getName = (e: any) => {
    setName(e.target.value)
  }

  const getUser = (e: any) => {
    setUser(e.target.value)
  }

  const getPassword = (e: any) => {
    setPassword(e.target.value)
  }

  function validateFields() {
    if (user === '' || password === '' || name === '') {
      Alert.fire({
        icon: 'warning',
        title: 'Ops! Ocorreu um erro',
        text:'Por favor preencha todos os campos',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (password.length <= 6) {
      Alert.fire({
        icon: 'warning',
        title: 'Ops! Ocorreu um erro',
        text:'Escolha uma seha com ao menos 6 caracteres',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Alert.fire({
        icon: 'success',
        title: 'Conta criado com sucesso! ',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar:true
      })
      router.push('/')
    }
  }

  async function saveUser(e: any) {
    e.preventDefault()
    validateFields()
  }



  return (
    <main className={`min-h-screen lg:overflow-hidden   h-fulll w-screen bg-bgPrimary  ${poppins.className}`}>
      {/* Form Column */}
      <div className=' text-white md:h-full  grid h-[100vh] items-center justify-center bg-bgPrimary'>
        {/* Desktop Version*/}
        <div className=' hidden md:flex lg:flex flex-col  items-center justify-center h-[100vh] w-[100vw] max-h-[560px] md:min-h-[540px] max-w-[476px] md:m-8 bg-bgContentForm rounded-lg'>
          <Heading h1 value='Crie sua conta' ></Heading>
          <div className='w-[348px] mt-6 flex flex-col gap-8 '>
            <Input type='text' change={getName} submit={saveUser} loginForm value='Maria da Silva' label='Seu nome' />
            <Input type='email' change={getUser} submit={saveUser} loginForm value='exemplo@exemplo.com.br' label='Email' />
            <Input type='password' change={getPassword} submit={saveUser} loginForm value='Mínimo 6 caracteres' label='Senha' />
            <Button value='Criar conta' onclick={saveUser} />
          </div>
          <Link className={`${poppins.className} hover:text-bgSecondary text-button  font-medium mt-8`} href={'/'}>Já tenho uma conta</Link>
        </div>
        {/* Mobile version*/}
        <div className=' flex md:hidden sm:flex  lg:hidden flex-col  items-center justify-center h-[100vh] w-[100vw] sm:min-h-[540px] md:max-w-[476px]  bg-bgContentForm rounded-lg'>
          <Heading h1 value='Crie sua conta' ></Heading>
          <div className='w-[348px] justify-center items-center mt-8 flex flex-col gap-8 '>
            <Input type='text' change={getName} submit={saveUser} loginForm value='Maria da Silva' label='Seu nome' />
            <Input type='email' change={getUser} submit={saveUser} loginForm value='exemplo@exemplo.com.br' label='Email' />
            <Input type='password' change={getPassword} submit={saveUser} loginForm value='Mínimo 6 caracteres' label='Senha' />
            <Button value='Criar conta' onclick={saveUser} />
          </div>
          <Link className={`${poppins.className} hover:text-bgSecondary text-button font-medium mt-8`} href={'/'}>Já tenho uma conta</Link>
        </div>
      </div>
    </main>
  )
}

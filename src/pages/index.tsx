import { Logo } from '@/components/Logo'
import { Roboto_Flex } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { Input } from '@/components/Input'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/hooks/UserContext'
import { useRouter } from 'next/router'

const roboto = Roboto_Flex({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['700', '600', '500'] })

export default function Login() {
  const { state } = useAuth()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const getUser = (e: any) => {
    setUser(e.target.value)
  }

  const getPassword = (e: any) => {
    setPassword(e.target.value)
  }

  function validateFields() {
    const defaultPassword = 'user'

    if (user === 'admin' && password === 'admin') {
      alert(`Bem-vindo de volta Administrador !`)
    } else if (user === '') {
      alert('Por favor preencha ambos os campos')
      return
    } else if (password === '') {
      alert('Por favor preencha ambos os campos')
      return
    } else if (password === defaultPassword) {
      alert(`Bem-vindo de volta ${user} !`)
    } else {
      alert("usuário ou senha incorretos")
    }

  }

  async function SignIn(e: any) {
    e.preventDefault()
    validateFields()

    if (user === 'admin' && password === 'admin') {
      state.logged = true
      state.admin = true
      sessionStorage.setItem('logged','true')
      sessionStorage.setItem('admin','true')
      console.log(sessionStorage.getItem('logged'))
      router.push('/dashboard')
    }

    if (password === 'user') {
      state.logged = true
      sessionStorage.setItem('logged','true')
      console.log(sessionStorage.getItem('logged'))
      router.push('/dashboard')
    }

    console.log(`User connected: ${state.logged}
Admin connected: ${state.admin}
    `)

  }

  return (
    <main className={`min-h-screen sm:min-h-screen  overflow-hidden md:flex-col md:flex md:justify-evenly lg:overflow-hidden lg:grid  h-fulll grid md:grid-cols-2 lg:grid-cols-2  w-screen bg-bgPrimary  ${roboto.className}`}>
      {/* Logo Column(Desktop)*/}
      <div className='hidden md:flex  bg-bgPrimary text-white   lg:grid md:h-full items-center justify-center'>
        <span className={`flex items-center gap-3 text-[42px] font-bold ${poppins.className}`}>
          <Logo></Logo>
        </span>
      </div>
      {/* Form Column */}
      <div className=' text-white md:h-full   grid  items-center justify-center bg-bgPrimary'>
        {/* Desktop Version*/}
        <div className=' hidden md:flex lg:flex flex-col  items-center justify-center h-[100vh] w-[100vw] max-h-[540px] md:min-h-[540px] max-w-[476px] md:m-8 bg-bgContentForm rounded-lg'>
          <Heading h1 value='Faça login' ></Heading>
          <div className='w-[348px] mt-8 flex flex-col gap-8 '>
            <Input
              change={getUser}
              submit={SignIn}
              loginForm
              value='Exemplo: exemplo@exemplo.com.br'
              label='Email'
            />
            <Input
              change={getPassword}
              submit={SignIn}
              loginForm
              type='password'
              value='No mínimo 6 caracteres'
              label='Senha'
            />
            <Button value='Entrar' type='submit' onclick={SignIn} />
          </div>
          <Link className={`${poppins.className} hover:opacity-70  font-medium mt-8`} href={'/sign-up'}>Criar uma conta</Link>
        </div>
        {/* Mobile version*/}
        <div className=' flex md:hidden sm:flex  lg:hidden flex-col  items-center justify-center h-[100vh] w-[100vw] sm:min-h-[540px] md:max-w-[476px]  bg-bgContentForm rounded-lg'>
          <Heading h1 value='Faça login' ></Heading>
          <div className='w-[348px] justify-center items-center mt-8 flex flex-col gap-8 '>
            <Input
              change={getUser}
              submit={SignIn}
              loginForm
              value='Exemplo: exemplo@exemplo.com.br'
              label='Email'
            />
            <Input
              change={getPassword}
              submit={SignIn}
              loginForm
              type='password'
              value='No mínimo 6 caracteres'
              label='Senha'
            />
            <Button type='submit' value='Entrar' onclick={SignIn} />
          </div>
          <Link className={`${poppins.className} hover:opacity-70  font-medium mt-8`} href={'/sign-up'}>Criar uma conta</Link>
        </div>
      </div>
    </main>
  )
}

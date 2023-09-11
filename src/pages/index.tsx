import { Logo } from '@/components/Logo'
import { Roboto_Flex } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/hooks/UserContext'
import { useRouter } from 'next/router'
import Alert from 'sweetalert2'
import { api } from '@/services/api'
import axios from 'axios'

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
      Alert.fire({
        icon: 'success',
        title: 'Bem-vindo de volta Administrador ',
        showConfirmButton: false,
        timer: 1000
      })
    } else if (user === '') {
      Alert.fire({
        icon: 'warning',
        title: 'Ops! Ocorreu um erro',
        text: 'Por favor preencha ambos os campos',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (password === '') {
      Alert.fire({
        icon: 'warning',
        title: 'Ops! Ocorreu um erro',
        text: 'Por favor preencha ambos os campos',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (password === defaultPassword) {
      Alert.fire({
        icon: 'success',
        title: `Bem vindo de volta ${user}`,
        showConfirmButton: false,
        timer: 1000
      })
    } else {
      Alert.fire({
        icon: 'warning',
        title: 'Ops! Ocorreu um erro',
        text: 'Usuário e/ou senha incorretos',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }

  async function SignIn(e: any) {
    e.preventDefault()
    validateFields()

    async function getData() {
      let result = await axios.get(`http://localhost:3000/api/auth/${user}/${password}`);
      console.log(result)
    }

    getData()

    if (user === 'admin' && password === 'admin') {
      state.logged = true
      state.admin = true
      sessionStorage.setItem('logged', 'true')
      sessionStorage.setItem('admin', 'true')
      console.log(sessionStorage.getItem('logged'))
      router.push('/dashboard')
    }

    if (password === 'user') {
      state.logged = true
      sessionStorage.setItem('logged', 'true')
      console.log(sessionStorage.getItem('logged'))
      router.push('/dashboard')
    }

  }

  return (
    <main className={`min-h-screen sm:min-h-screen  overflow-hidden md:flex-col md:flex md:justify-evenly lg:overflow-hidden  h-fulll   w-screen bg-bgPrimary  ${roboto.className}`}>
      {/* Logo Column(Desktop)*/}

      {/* Form Column */}
      <div className=' text-white md:h-full grid  items-center justify-center bg-bgPrimary'>
        {/* Desktop Version*/}
        <div className=' hidden md:flex  lg:flex flex-col  items-center justify-center h-[100vh] w-[100vw] max-h-[540px] md:min-h-[540px] max-w-[476px] md:m-8 bg-bgContentForm rounded-lg'>
          <Logo></Logo>
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
          <span className='mt-8 text-bgSecondary '>
            Não tem conta?
            <Link className={`${poppins.className} m-2 text-button hover:opacity-70  font-medium `} href={'/sign-up'}>Criar uma</Link>
          </span>
        </div>
        {/* Mobile version*/}
        <div className='  flex md:hidden sm:flex  lg:hidden flex-col  items-center justify-center h-[100vh] w-[100vw] sm:min-h-[540px] md:max-w-[476px]  bg-bgContentForm rounded-lg'>
          <Logo></Logo>
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
          <span className='mt-8 text-bgSecondary '>
            Não tem conta?
            <Link className={`${poppins.className} m-2 text-button hover:opacity-70  font-medium `} href={'/sign-up'}>Criar uma</Link>
          </span>
        </div>
      </div>
    </main>
  )
}

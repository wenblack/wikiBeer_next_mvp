import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContextProvider } from '@/hooks/UserContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

import { NotConnectedView } from '@/components/NotConnectedView'
import { ReactElement, useEffect, useState } from 'react'
import { LoadingView } from '@/components/LoadingView'

interface props{
  children : ReactElement<any>
}

export  function Auth({children}:props) {
  const [islogged,setisLogged] = useState(false)
  const [disconnected, setDisconnected] = useState(false)


  useEffect(()=>{
    let result = sessionStorage.getItem('logged')
     
    if(result === 'true'){
      setisLogged(true)
      console.log('LocalStorage é '+result)
    }else if (result === null){
      setDisconnected(true)
      console.log('LocalStorage é '+result)
    } else{
      console.log('LocalStorage é '+result)
    }

  })

  if (disconnected) {
    return (
      <NotConnectedView/>
      )
    }
  
  if(islogged){
    return(
      < >
        {children}
      </>
      )
  }


  return (
    <LoadingView/>
  )
}

import Alert from  'sweetalert2'

interface AlertProps{
    message:string
    type:'success' | 'error' | 'warning' | 'info' | 'question'
}

export function ModalMessage ({message,type}:AlertProps){
  if(type === 'success'){
    return(
        Alert.fire({
            position: 'center',
            icon: type,
            title: message,
            showConfirmButton: false,
            timer: 1500
          })
    )
  }
  return(
    Alert.fire({
        title: 'Ops! Ocorre um erro',
        text: message,
        icon: type,
      })
  )
}
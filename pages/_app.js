import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import AppContext from '../AppContext'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [user, setuser] = useState('')
  useEffect(() => {
    if(user.length == 0 || user== null )
    {
      //Check if localStorage has a token role
      if(typeof(window)!= undefined && localStorage.getItem('role'))
      {
        setuser(localStorage.getItem('role'));
      }

    }
  }, [])
  
  // useEffect(() => {
  //   console.log('User from app.js ', user);
  //   if(user.length == 0 || user== null )
  //   {
  //     //Check if localStorage has a token role
  //     if(typeof(window)!= undefined && localStorage.getItem('role'))
  //     {
  //       setuser(localStorage.getItem('role'));
  //     }

  //   }
  // }, [user])

  
  

  return (
    
    <ChakraProvider>
  { <AppContext.Provider value={{user, setuser}}>
    <Component {...pageProps} />
    </AppContext.Provider>
  }
    
  </ChakraProvider>
  )
}

export default MyApp

import { createContext } from 'react'

const AuthContext = createContext( {
  name: null,
  login: () => {},
  logout: () => {},
  authReady = false
} )

export let AuthContextProvider()
 
export default AuthContext;
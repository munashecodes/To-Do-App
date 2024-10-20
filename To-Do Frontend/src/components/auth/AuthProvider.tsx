import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react"
import { api } from "../../apiRequests/auth-interceptor"
import { authRequests } from "../../apiRequests/auth-api";

// Define the shape of the context value
interface AuthContextType {
    api: typeof api;
    isAuthenticated: boolean;
    checkAuth: () => Promise<void>
}

// Create the AuthContext with an initial value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode; // Type for children
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const checkAuth = useCallback(async () => {
        const token = sessionStorage.getItem('jwt-token')
        if(token){
            const isVald = await authRequests.validateToken(token)
            setIsAuthenticated(isVald)
        } else{
            setIsAuthenticated(false)
        }
        
    }, [])

    useEffect(() => {
        checkAuth()
    }, [checkAuth])
  return (
    <AuthContext.Provider value={{api, isAuthenticated, checkAuth}}>
        {children}

    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
export default AuthProvider
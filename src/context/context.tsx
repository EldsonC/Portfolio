import { createContext, ReactNode, useCallback, useContext, useState } from "react"
import { api } from "../services/api";

interface AuthContextState {
    token: TokenState;
    signIn({ email, password }: UserData): Promise<void>;
    userLogged(): boolean;
    userRegister({ name, email, password }: UserData): Promise<void>
}

interface UserData {
    name?: string
    email?: string;
    password?: string;
}

interface TokenState {
    token: string;
}

interface InputProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState)

export const AuthProvider: React.FC<InputProps> = ({ children }) => {
    const [token, setToken] = useState<TokenState>(() => {
        const token = localStorage.getItem("@PermissionMRY:token");

        if (token) {
            return { token }
        }

        return {} as TokenState
    })

    const signIn = useCallback(async ({ email, password }: UserData) => {
        const response = await api.post('/sign-in', {
            email,
            password
        })

        const { token, userData } = response.data
        setToken(token)

        localStorage.setItem('@MRYTOKEN:token', token)
        localStorage.setItem('@USER:token', JSON.stringify(userData))

        return userData
    }, [])

    const userRegister = useCallback(async ({ name, password, email }: UserData) => {

        await api.post('/sign-up', {
            name,
            email,
            password
        })

    }, [])

    const userLogged = useCallback(() => {
        const token = localStorage.getItem('@MRYTOKEN:token');
        if (token) {
            return true;
        }
        return false
    }, [])

    return (
        <AuthContext.Provider value={
            {
                token,
                signIn,
                userLogged,
                userRegister
            }
        }>

            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextState {
    const context = useContext(AuthContext)
    return context
}
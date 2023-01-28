import { createContext, useState, useContext } from 'react'
interface IUser {
    email: string
    password: string
}
interface IContext {
	user: IUser | null
	signIn: (user: IUser, cb: () => void) => void
	signOut: (cb: () => void) => void
}

export const AuthContext = createContext<IContext>({} as IContext)

interface IProps {
	children: JSX.Element
}

export const AuthProvider = (props: IProps) => {
	const [user, setUser] = useState<IUser | null>(null)

	const signIn = (user: IUser, cb: () => void) => {
		setUser(user)
		cb()
	}

	const signOut = (cb: () => void) => {
		setUser(null)
		cb()
	}

	const providerValue = { user, signIn, signOut }

	return (
		<AuthContext.Provider value={providerValue}>
			{props.children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	return useContext(AuthContext)
}
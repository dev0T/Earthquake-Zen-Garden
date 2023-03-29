import fileService from '../../services/file'
import { setUserData } from './UserReducer'
import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useMemo
} from 'react'

const initialState = {
  firstName: '',
  lastName: '',
  avatarImage: '',
  phone: '',
  email: '',
  bio: ''
}

const UserContext = createContext([initialState, () => initialState])

export const UserContextProvider = ({ reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  useEffect(() => {
    const fetchUserData = async () => {
      const profile = await fileService.getProfileData()
      dispatch(setUserData(profile))
    }
    fetchUserData()
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserStateValue = () => useContext(UserContext)

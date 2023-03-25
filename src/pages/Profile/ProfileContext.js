import fileService from '../../services/file'
import { setProfileData } from './ProfileReducer'
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

const ProfileContext = createContext([initialState, () => initialState])

export const ProfileContextProvider = ({ reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchUserData = async () => {
      const profileData = await fileService.getProfileData()
      dispatch(setProfileData(profileData))
    }
    fetchUserData()
  }, [])

  const value = useMemo(() => [state, dispatch], [state])

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  )
}

export const useProfileStateValue = () => useContext(ProfileContext)

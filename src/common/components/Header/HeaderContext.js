import fileService from '../../../services/file'
import { setHeaderData } from './HeaderReducer'
import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useMemo
} from 'react'

const initialState = {
  title: '',
  logoImage: ''
}

const HeaderContext = createContext([initialState, () => initialState])

export const HeaderContextProvider = ({ reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  useEffect(() => {
    const fetchHeaderData = async () => {
      const { title, logoImage } = await fileService.getSiteData()
      dispatch(setHeaderData({ title, logoImage }))
    }
    fetchHeaderData()
  }, [])

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  )
}

export const useHeaderStateValue = () => useContext(HeaderContext)

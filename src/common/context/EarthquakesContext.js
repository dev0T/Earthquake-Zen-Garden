import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useMemo
} from 'react'
import fileService from '../../services/file'
import { setEarthquakeData } from './EarthquakesReducer'

const initialState = {
  earthquakeData: {
    metadata: {
      title: ''
    },
    features: []
  },
  sortParams: {
    column: 'time',
    order: 'desc'
  }
}

const EarthquakeContext = createContext([initialState, () => initialState])

export const EarthquakeContextProvider = ({ reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  useEffect(() => {
    const fetchEarthquakeData = async () => {
      const earthquakeData = await fileService.getEarthquakeData()
      dispatch(setEarthquakeData(earthquakeData))
    }
    fetchEarthquakeData()
  }, [])

  return (
    <EarthquakeContext.Provider value={value}>
      {children}
    </EarthquakeContext.Provider>
  )
}

export const useEarthquakeStateValue = () => useContext(EarthquakeContext)

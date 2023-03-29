import { Route, Routes } from 'react-router-dom'
import Header from './common/components/Header'
import { EarthquakeContextProvider } from './common/context/EarthquakesContext'
import { earthquakeReducer } from './common/context/EarthquakesReducer'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Profile from './pages/Profile'
import './styles/index.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <EarthquakeContextProvider reducer={earthquakeReducer}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path=":featureId" element={<Detail />} />
        </Routes>
      </EarthquakeContextProvider>
    </div>
  )
}

export default App

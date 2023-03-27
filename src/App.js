import { Route, Routes } from 'react-router-dom'
import Header from './common/components/Header'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Profile from './pages/Profile'
import './styles/index.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path=":featureId" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App

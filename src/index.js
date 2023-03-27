import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { UserContextProvider } from './common/context/UserContext'
import { userReducer } from './common/context/UserReducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextProvider reducer={userReducer}>
      <App />
    </UserContextProvider>
  </BrowserRouter>
)

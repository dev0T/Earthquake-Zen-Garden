import ReactDOM from 'react-dom/client'
import App from './App'
import { UserContextProvider } from './common/context/UserContext'
import { userReducer } from './common/context/UserReducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider reducer={userReducer}>
    <App />
  </UserContextProvider>
)

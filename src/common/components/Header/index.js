import HeaderContent from './HeaderContent'
import { HeaderContextProvider } from './HeaderContext'
import { headerReducer } from './HeaderReducer'

const Header = () => {
  return (
    <HeaderContextProvider reducer={headerReducer}>
      <HeaderContent />
    </HeaderContextProvider>
  )
}

export default Header

import Logo from './Logo'
import Title from './Title'
import UserNav from './UserNav'
import { useUserStateValue } from '../../context/UserContext'
import { useHeaderStateValue } from './HeaderContext'

const HeaderContent = () => {
  const [{ title, logoImage }] = useHeaderStateValue()
  const [{ firstName }] = useUserStateValue()

  return (
    <div className="Header">
      <Logo logo={logoImage} />
      <Title title={title} />
      <UserNav user={firstName} />
    </div>
  )
}

export default HeaderContent

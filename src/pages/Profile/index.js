import { ProfileContextProvider } from './ProfileContext'
import { profileReducer } from './ProfileReducer'
import UserInfo from './UserInfo'

const Profile = () => {
  return (
    <ProfileContextProvider reducer={profileReducer}>
      <div className="Profile">
        <UserInfo />
      </div>
    </ProfileContextProvider>
  )
}

export default Profile

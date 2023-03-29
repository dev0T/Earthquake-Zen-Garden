import { useUserStateValue } from '../../common/context/UserContext'
import Avatar from './Avatar'
import InfoRow from './InfoRow'

const Profile = () => {
  const [{ avatarImage, firstName, lastName, phone, email, bio }] =
    useUserStateValue()
  return (
    <div className="Page">
      <div className="Page-Header">
        <h3>Profile</h3>
      </div>
      <div className="Page-Contents">
        <Avatar avatarUrl={avatarImage} userName={firstName} />
        <div className="User-Info">
          <InfoRow fieldName={'First Name'} fieldValue={firstName} />
          <InfoRow fieldName={'Last Name'} fieldValue={lastName} />
          <InfoRow fieldName={'Phone'} fieldValue={phone} />
          <InfoRow fieldName={'Email'} fieldValue={email} />
          <InfoRow fieldName={'Bio'} fieldValue={bio} />
        </div>
      </div>
    </div>
  )
}

export default Profile

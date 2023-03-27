import Avatar from './Avatar'
import InfoRow from './InfoRow'
import { useProfileStateValue } from './ProfileContext'

const UserInfo = () => {
  const [{ avatarImage, firstName, lastName, phone, email, bio }] =
    useProfileStateValue()
  return (
    <div className="User-Profile">
      <div className="Profile-Header">
        <h3>Profile</h3>
      </div>
      <div className="Profile-Contents">
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

export default UserInfo

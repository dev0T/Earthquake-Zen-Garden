import { useProfileStateValue } from './ProfileContext'

const UserInfo = () => {
  const [state] = useProfileStateValue()
  return (
    <div className="User-Info">
      <h3>Profile</h3>
      <img src={state.avatarImage} alt={`${state.firstName} avatar`}></img>
      <div className="Display-Info">
        <span>First Name</span>
        <span>{state.firstName}</span>
      </div>
      <div className="Display-Info">
        <span>Last Name</span>
        <span>{state.lastName}</span>
      </div>
      <div className="Display-Info">
        <span>Phone</span>
        <span>{state.phone}</span>
      </div>
      <div className="Display-Info">
        <span>Email</span>
        <span>{state.email}</span>
      </div>
      <div className="Display-Info">
        <span>Bio</span>
        <span>{state.bio}</span>
      </div>
    </div>
  )
}

export default UserInfo

import { Link } from 'react-router-dom'

const UserNav = ({ user }) => {
  return (
    <div className="User-Nav">
      <Link to="profile" className="User-Link">{`Welcome ${user}`}</Link>
    </div>
  )
}

export default UserNav

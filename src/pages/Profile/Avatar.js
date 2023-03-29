const Avatar = ({ avatarUrl, userName }) => {
  return (
    <div className="Avatar-Container">
      <img src={avatarUrl} alt={`${userName} avatar`} className="User-Avatar" />
    </div>
  )
}

export default Avatar

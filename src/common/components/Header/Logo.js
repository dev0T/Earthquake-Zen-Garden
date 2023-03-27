import { Link } from 'react-router-dom'

const Logo = ({ logo }) => {
  return (
    <div className="Header-Logo">
      <Link to="/">
        <img src={logo} alt="App Logo" className="Logo-Image"></img>
      </Link>
    </div>
  )
}

export default Logo

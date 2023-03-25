const Logo = ({ logo }) => {
  return (
    <div className="Header-Logo">
      <a href="">
        <img src={logo} alt="App Logo" className="Logo-Image"></img>
      </a>
    </div>
  )
}

export default Logo

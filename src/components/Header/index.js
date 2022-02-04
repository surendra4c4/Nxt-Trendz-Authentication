// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo"
    />
    <ul className="items-container">
      <li className="header-items">Home</li>
      <li className="header-items">Products</li>
      <li className="header-items">Cart</li>
      <button type="button" className="header-btn">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header

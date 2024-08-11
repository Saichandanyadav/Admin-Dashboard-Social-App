import {useState, useEffect} from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    document.body.classList.toggle('navbar-closed', !isOpen)
  }, [isOpen])

  return (
    <div className={`navbar ${isOpen ? ' ' : 'closed'}`}>
      <button type="button" className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'X' : '>'}
      </button>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/saichandanyadav/"
              target="_self"
            >
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

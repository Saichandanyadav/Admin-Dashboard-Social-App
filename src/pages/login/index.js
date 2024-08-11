import {useState} from 'react'
import {useHistory} from 'react-router-dom'

import './index.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleLogin = e => {
    e.preventDefault()
    // Dummy login logic
    if (email && password) {
      history.push('/home')
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login

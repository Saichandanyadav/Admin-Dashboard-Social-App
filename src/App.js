import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home'
import Users from './pages/users'
import Posts from './pages/posts'
import Login from './pages/login'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/posts" component={Posts} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  )
}

export default App

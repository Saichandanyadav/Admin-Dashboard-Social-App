import {useState, useEffect} from 'react'
import './UserTable.css'

// Dummy data
const initialUsers = [
  {
    user_id: 1,
    username: 'rajesh123',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
  },
  {
    user_id: 2,
    username: 'anita456',
    name: 'Anita Sharma',
    email: 'anita.sharma@example.com',
  },
  {
    user_id: 3,
    username: 'amit789',
    name: 'Amit Singh',
    email: 'amit.singh@example.com',
  },
  {
    user_id: 4,
    username: 'preeti101',
    name: 'Preeti Verma',
    email: 'preeti.verma@example.com',
  },
  {
    user_id: 5,
    username: 'rohit112',
    name: 'Rohit Patel',
    email: 'rohit.patel@example.com',
  },
  {
    user_id: 6,
    username: 'neha123',
    name: 'Neha Gupta',
    email: 'neha.gupta@example.com',
  },
  {
    user_id: 7,
    username: 'sunil456',
    name: 'Sunil Reddy',
    email: 'sunil.reddy@example.com',
  },
  {
    user_id: 8,
    username: 'isha789',
    name: 'Isha Desai',
    email: 'isha.desai@example.com',
  },
  {
    user_id: 9,
    username: 'vikas101',
    name: 'Vikas Yadav',
    email: 'vikas.yadav@example.com',
  },
  {
    user_id: 10,
    username: 'meena112',
    name: 'Meena Rao',
    email: 'meena.rao@example.com',
  },
]

const UserTable = () => {
  const [users, setUsers] = useState(initialUsers)
  const [editUser, setEditUser] = useState(null)
  const [newUser, setNewUser] = useState({username: '', name: '', email: ''})

  // Load users from local storage on mount
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'))
    if (storedUsers) {
      setUsers(storedUsers)
    }
  }, [])

  // Save users to local storage whenever the users state changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const handleEdit = user => {
    setEditUser(user)
  }

  const handleSaveEdit = () => {
    setUsers(users.map(u => (u.user_id === editUser.user_id ? editUser : u)))
    setEditUser(null)
  }

  const handleAddUser = () => {
    const maxId = users.reduce(
      (max, user) => (user.user_id > max ? user.user_id : max),
      0,
    )
    const newId = maxId + 1
    const userToAdd = {...newUser, user_id: newId}
    setUsers([...users, userToAdd])
    setNewUser({username: '', name: '', email: ''})
  }

  const handleChange = e => {
    const {name, value} = e.target
    if (editUser) {
      setEditUser({...editUser, [name]: value})
    } else {
      setNewUser({...newUser, [name]: value})
    }
  }

  const handleDelete = userId => {
    setUsers(users.filter(user => user.user_id !== userId))
  }

  return (
    <div className="main-user-container">
      <h1>USER DETAILS</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body-styling">
          {users.map(user => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button type="button" onClick={() => handleEdit(user)}>
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(user.user_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Popup */}
      {editUser && (
        <div className="popup">
          <h3>Edit User</h3>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={editUser.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editUser.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={editUser.email}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={handleSaveEdit}>
            Save
          </button>
          <button type="button" onClick={() => setEditUser(null)}>
            Cancel
          </button>
        </div>
      )}

      <div className="new-user-details">
        <div className="add-user">
          <h3>Add New User</h3>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={newUser.username}
              onChange={handleChange}
              placeholder="Username"
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </label>
          <button type="button" onClick={handleAddUser}>
            Add User
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserTable

// src/pages/users/index.js
import UserTable from '../../components/UserTable'
import Navbar from '../../components/Navbar'

const Users = () => {
  // Dummy data
  const users = [
    {
      user_id: 1,
      username: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
    },
    {
      user_id: 2,
      username: 'jane_doe',
      name: 'Jane Doe',
      email: 'jane@example.com',
    },
    // Add more users as needed
  ]

  return (
    <div>
      <Navbar />
      <div className="users">
        <UserTable users={users} />
      </div>
    </div>
  )
}

export default Users

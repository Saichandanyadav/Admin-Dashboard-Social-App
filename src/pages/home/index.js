import KPIBox from '../../components/KPIBox'
import Navbar from '../../components/Navbar'
import './index.css'

const Home = () => {
  const kpis = {
    totalUsers: 1000,
    totalPosts: 5000,
    usersActiveLast24: 200,
    postsLast24: 300,
  }

  return (
    <div className="home-main-container">
      <Navbar />
      <div className="home">
        <h1>WELCOME BUDDY!</h1>
        <KPIBox title="Total Users" value={kpis.totalUsers} />
        <KPIBox title="Total Posts" value={kpis.totalPosts} />
        <KPIBox
          title="Users Active in Last 24 Hours"
          value={kpis.usersActiveLast24}
        />
        <KPIBox
          title="Posts Published in Last 24 Hours"
          value={kpis.postsLast24}
        />
      </div>
    </div>
  )
}

export default Home

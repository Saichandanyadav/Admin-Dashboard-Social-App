// src/pages/posts/index.js
import PostTable from '../../components/PostTable'
import Navbar from '../../components/Navbar'

const Posts = () => {
  // Dummy data
  const posts = [
    {
      post_id: 1,
      caption: 'Beautiful sunset',
      media_url: 'http://example.com/sunset.jpg',
    },
    {
      post_id: 2,
      caption: 'Holiday trip',
      media_url: 'http://example.com/holiday.jpg',
    },
    // Add more posts as needed
  ]

  return (
    <div>
      <Navbar />
      <div className="posts">
        <PostTable posts={posts} />
      </div>
    </div>
  )
}

export default Posts

import {useState, useEffect} from 'react'
import './PostTable.css'

// Dummy images for posts
const dummyImages = [
  'https://i.pinimg.com/564x/e6/77/08/e6770838247678ed857642e9193726bd.jpg',
  'https://i.pinimg.com/564x/8c/31/c4/8c31c46b3907d24901a7f5f4dc4d94aa.jpg',
  'https://i.pinimg.com/564x/73/6a/60/736a60c7b542f19d6bc673a115aadb8a.jpg',
  'https://i.pinimg.com/564x/52/1a/01/521a01d28f8bc09a8042ee20a0f6451c.jpg',
  'https://i.pinimg.com/736x/d0/d3/c1/d0d3c14bcbc45aa90ea02bdc03f02ea4.jpg',
  'https://i.pinimg.com/564x/22/fe/b7/22feb771bd3e53cc3279c4a2187e0c88.jpg',
  'https://i.pinimg.com/564x/9e/98/bd/9e98bd94f14f8a65fb0777f0dc08e39f.jpg',
  'https://i.pinimg.com/564x/aa/a9/2a/aaa92a3c0a605671a2e1b20871913c34.jpg',
  'https://i.pinimg.com/564x/30/8c/3a/308c3aec689ae50055e3b3b4016363be.jpg',
  'https://i.pinimg.com/564x/e2/1d/e0/e21de0f4122d1926368bcd78cacd6ff6.jpg',
]

// Function to get posts from local storage
const getPostsFromLocalStorage = () => {
  const posts = localStorage.getItem('posts')
  return posts ? JSON.parse(posts) : []
}

// Function to save posts to local storage
const savePostsToLocalStorage = posts => {
  localStorage.setItem('posts', JSON.stringify(posts))
}

const PostTable = () => {
  const initialPosts = getPostsFromLocalStorage()
  const [posts, setPosts] = useState(
    initialPosts.length > 0
      ? initialPosts
      : [
          {
            post_id: '1',
            post_caption: 'Travel on Fly',
            media_url: dummyImages[0],
          },
          {
            post_id: '2',
            post_caption: 'Stunny Cool',
            media_url: dummyImages[1],
          },
          {
            post_id: '3',
            post_caption: 'Wall of Watches',
            media_url: dummyImages[2],
          },
          {
            post_id: '4',
            post_caption: 'Meal of Monday',
            media_url: dummyImages[3],
          },
          {
            post_id: '5',
            post_caption: 'Loving for loves',
            media_url: dummyImages[4],
          },
          {
            post_id: '6',
            post_caption: 'The We are two',
            media_url: dummyImages[5],
          },
          {
            post_id: '7',
            post_caption: 'Traditional Back',
            media_url: dummyImages[6],
          },
          {
            post_id: '8',
            post_caption: 'Summer Sunday Special',
            media_url: dummyImages[7],
          },
          {
            post_id: '9',
            post_caption: 'Beach with BoyFriend',
            media_url: dummyImages[8],
          },
          {
            post_id: '10',
            post_caption: 'Sweets for SweetHearts',
            media_url: dummyImages[9],
          },
        ],
  )

  const [newPostCaption, setNewPostCaption] = useState('')
  const [newPostImage, setNewPostImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  useEffect(() => {
    savePostsToLocalStorage(posts)
  }, [posts])

  const handleCaptionChange = event => {
    setNewPostCaption(event.target.value)
  }

  const handleImageChange = event => {
    const file = event.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImagePreview(imageUrl)
      setNewPostImage(file)
    }
  }

  const handleAddPost = () => {
    if (newPostCaption && newPostImage) {
      const imageUrl = URL.createObjectURL(newPostImage)
      const newPost = {
        post_id: (posts.length + 1).toString(),
        post_caption: newPostCaption,
        media_url: imageUrl,
      }
      setPosts([...posts, newPost])
      setNewPostCaption('')
      setNewPostImage(null)
      setImagePreview(null)
    }
  }

  const handleDelete = postId => {
    const updatedPosts = posts.filter(post => post.post_id !== postId)
    setPosts(updatedPosts)
  }

  return (
    <div className="main-post-container">
      <div className="post-upload">
        <h2>Add New Post</h2>
        <input
          type="text"
          value={newPostCaption}
          onChange={handleCaptionChange}
          placeholder="Post Caption"
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imagePreview && <img src={imagePreview} alt="Preview" width="100" />}
        <button type="button" onClick={handleAddPost}>
          Add Post
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Post Caption</th>
            <th>Media URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body-styling">
          {posts.map(post => (
            <tr key={post.post_id}>
              <td>{post.post_id}</td>
              <td>{post.post_caption}</td>
              <td>
                <img
                  src={post.media_url}
                  alt={`Post ${post.post_id}`}
                  width="100"
                />
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDelete(post.post_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostTable

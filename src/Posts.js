import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Posts = props => {
  const [posts, setPosts] = useState([])
  const styles = {
    margin: 12,
    borderBottom: "solid 3px black"
  }
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setPosts(res.data))
  })

  return (
    <>
      <h1>Current Posts</h1>
      {posts.map(({id, title, userId, body}) => (  /*to show posts from state variable*/
        <div style={styles}>
          <h2 style={{display: 'inline'}}>{title}</h2>
          <p style={{marginLeft: 12, display: 'inline'}}>User: {userId}</p>
          <p key={id}>{body}</p>
        </div>
      ))}
    </>
  )
  
  
  
  
  
}

export default Posts
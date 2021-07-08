import React from 'react'
import {useSelector} from 'react-redux';
import NewPost from './NewPost';
function ReduxPostList(){
  const posts = useSelector((state)=> state.posts)

  return(
    <>
      <NewPost />
      <h3>Post List</h3>
      <ul>
        {posts.map((post,index)=> {
            return(
              <li key={index}>
                <span>{post.text}</span>
              </li>
            );
          })
        }
      </ul>
    </>
  );
}

export default ReduxPostList;
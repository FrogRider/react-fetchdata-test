import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>; //display this if data is still loading
  }

  return (
    <ul className='list-group mb-4 col-12'>
      {posts.map(post => ( 
        <li key={post.id} className='list-group-item'>
          <b> {post.title} </b> <br/> <hr/>
          {post.body}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
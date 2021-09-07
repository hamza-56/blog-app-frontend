import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostsList = ({ fetchPosts, blogs, loading, error }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <div className='container'>Loading...</div>;
  } else if (error) {
    return <div className='alert alert-danger'>{error.msg}</div>;
  }

  return (
    <div className='container'>
      <h1>Posts</h1>
      {blogs.map((post) => (
        <li className='list-group-item' key={post.id}>
          <Link style={{ color: 'black' }} to={`/${post.slug}/`}>
            <h3 className='list-group-item-heading'>{post.title}</h3>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default PostsList;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ fetchPostDetails, blog, loading, error,}) => {
  const { slug } = useParams();
  useEffect(() => {
    fetchPostDetails(slug);
  }, [slug]);

  if (loading) {
    return <div className='container'>Loading...</div>;
  } else if (error) {
    return <div className='alert alert-danger'>{error.msg}</div>;
  } else if (!blog) {
    return <span />;
  }

  return (
    <div className='container'>
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <hr />
      <p>Author: {blog.author.username}</p>
    </div>
  );
};

export default PostDetail;

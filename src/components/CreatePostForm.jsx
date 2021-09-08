import { useState } from 'react';

const CreatePostForm = ({ createPost, loading, error }) => {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost(title, content);
  };

  if (loading) {
    return <div className='container'>Loading...</div>;
  }
  return (
    <div>
      {error && <div className='alert alert-danger'>{error.msg}</div>}
      <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1 mx-auto pt-5'>
        <h2 className="mb-4">Create Post</h2>
        <form className="mb-3" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='title' className='form-label'>
              Title
            </label>
            <input
              required
              type='text'
              className='form-control'
              id='title'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='content' className='form-label'>
              Content
            </label>
            <textarea
              required
              type='text'
              className='form-control'
              id='content'
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;

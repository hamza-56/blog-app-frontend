import { Link } from 'react-router-dom';

const LoginForm = ({ login, loading, error }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    login(username, password);
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

export default LoginForm;

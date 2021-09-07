import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = ({ signup, loading, error }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(username, password);
  };

  if (loading) {
    return <div className='container'>Loading...</div>;
  }
  return (
    <div>
      {error && <div className='alert alert-danger'>{error.msg}</div>}
      <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1 mx-auto pt-5'>
        <h2 className="mb-4">Sign Up</h2>
        <form className="mb-3" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='username' className='form-label'>
              Username
            </label>
            <input
              required
              type='text'
              className='form-control'
              id='username'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              required
              type='password'
              className='form-control'
              id='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
        <span>Already have an account? <Link to="/login">Log In</Link></span>
      </div>
    </div>
  );
};

export default SignUpForm;

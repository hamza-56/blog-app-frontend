import { Link } from 'react-router-dom';
import Logo from 'icons/Logo';

const Header = ({ username, logout }) => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <div className='container-fluid'>
      <Link className='navbar-brand' to='/'>
        <Logo />
      </Link>
      <div
        className='navbar-collapse justify-content-center'
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          {username ? (
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {username}
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <Link className='dropdown-item' to="/new">
                    New Post
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' onClick={logout}>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          ) : (
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup'>
                  Sign Up
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Log In
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;


import { Link } from 'react-router-dom';
import Logo from 'icons/Logo';

const Header = () => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
			<Link className="navbar-brand" to="/">
				<Logo />
			</Link>
			<div
				className="navbar-collapse justify-content-center"
				id="navbarSupportedContent"
			>
			</div>
		</div>
	</nav>
);

export default Header;
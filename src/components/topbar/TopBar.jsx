/* eslint-disable no-unused-vars */
import './topbar.css';
import userImage from '../../assets/userImage.jpeg';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from 'react-router-dom';

export default function TopBar() {
	const user = false;
	return (
		<div className="top">
			<div className="topLeft">
				<a href="https://facebook.com">
					<i className="topIcon fab fa-facebook-square"></i>
				</a>
				<i className="topIcon fab fa-facebook-square"></i>
				<i className="topIcon fab fa-instagram-square"></i>
				<i className="topIcon fab fa-pinterest-square"></i>
				<i className="topIcon fab fa-twitter-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link to="/">Home</Link>
					</li>
					<li className="topListItem">
						<Link to="/write">Write</Link>
					</li>
					<li className="topListItem">
						<Link to="/login">Login</Link>
					</li>
					<li className="topListItem">
						<Link to="/register">Register</Link>
					</li>
					<li className="topListItem">
						<Link to="/settings">Settings</Link>
					</li>
					<li className="topListItem">{user && 'Logout'}</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img className="topImg" src={userImage} alt="" />
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link to="/login">Login</Link>
						</li>
						<li className="topListItem">
							<Link to="/register">Register</Link>
						</li>
					</ul>
				)}
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}

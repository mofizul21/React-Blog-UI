/* eslint-disable no-unused-vars */
import "./login.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from 'react-router-dom';

export default function Login() {
  return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm">
				<label>Email</label>
				<input
					className="loginInput"
					type="text"
					placeholder="Enter your email..."
				/>
				<label>Password</label>
				<input
					className="loginInput"
					type="password"
					placeholder="Enter your password..."
				/>
				<button className="loginButton">Login</button>
			</form>
			<button className="loginRegisterButton">
				<Link to="/register">Register</Link>
			</button>
		</div>
  );
}

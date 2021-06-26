import TopBar from './components/topbar/TopBar';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Write from './pages/write/Write';
import Single from './pages/single/Single';
import Home from './pages/home/Home';
//import Post from './components/post/Post';
//import SinglePost from './singlePost/SinglePost';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const user = false;
	return (
		<Router>
			<TopBar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/register">{user ? <Home /> : <Register />}</Route>
				<Route path="/login">{user ? <Home /> : <Login />}</Route>
				<Route path="/write">{user ? <Write /> : <Register />}</Route>
				<Route path="/settings">{user ? <Settings /> : <Home />}</Route>
				<Route path="/post/:postId">
					<Single />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

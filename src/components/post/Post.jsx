/* eslint-disable no-unused-vars */
import './post.css';
import postImage from '../../assets/postImage.jpeg';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from 'react-router-dom';

export default function Post() {
	return (
		<div className="post">
			<Link to="/post/123">
				<img src={postImage} alt="" className="postImg" />
			</Link>

			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Fashion</span>
					<span className="postCat">Trend</span>
				</div>
				<span className="postTitle">
					<Link to="/post/123">Lorem ipsum dolor sit amet</Link>
				</span>
				<hr />
				<span className="postDate">1 hr ago</span>
			</div>

			<p className="postDesc">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Assumenda officia architecto deserunt deleniti? Labore ipsum
				aspernatur magnam fugiat, reprehenderit praesentium blanditiis
				quos cupiditate ratione atque, exercitationem quibusdam,
				reiciendis odio laboriosam? Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Laborum ullam quo accusamus
				assumenda dolorum, officia, aspernatur ut pariatur vel quisquam
				dignissimos culpa veniam molestiae harum provident. Aliquam
				maiores totam assumenda! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Maiores atque odio, sequi ad vel, ut
				consequatur corrupti optio est dolore mollitia ipsa aspernatur
				officiis delectus consectetur accusamus, aliquam consequuntur?
				Quo!
			</p>
		</div>
	);
}

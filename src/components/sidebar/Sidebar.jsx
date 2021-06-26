import aboutMeImg from '../../assets/aboutme.jpg';
import './sidebar.css';

export default function Sidebar() {
    return (
		<div className='sidebar'>
			<div className="sidebarItem">
				<span className="sidebarTitle">About Me</span>
				<img src={aboutMeImg} alt="" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatibus fuga iusto soluta nihil aut voluptatum.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">Categories</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Fashion</li>
					<li className="sidebarListItem">Food</li>
					<li className="sidebarListItem">Cloths</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Videos</li>
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">Follow Us</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fab fa-facebook-square"></i>
					<i className="sidebarIcon fab fa-instagram-square"></i>
					<i className="sidebarIcon fab fa-pinterest-square"></i>
					<i className="sidebarIcon fab fa-twitter-square"></i>
				</div>
			</div>
		</div>
	);
}

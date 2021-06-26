import './header.css';
import bannerImage from '../../assets/bannerImage.jpeg';

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">React & Node</span>
				<span className="headerTitleLg">Blog</span>
			</div>
			<img className="headerImg" src={bannerImage} alt="" />
		</div>
	);
}

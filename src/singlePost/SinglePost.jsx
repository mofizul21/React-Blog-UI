import './singlePost.css';
import postImg from '../../src/assets/postImage.jpeg';


export default function SinglePost() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img src={postImg} alt="" className="singlePostImg" />
				<h1 className="singlePostTitle">
					Lorem ipsum dolor sit amet consectetur
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span>
						Author:
						<b className="singlePostAuthor">Safak</b>
					</span>
					<span>Posted: 1 day ago</span>
				</div>

				<p className="singlePostDesc">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Iste error quibusdam ipsa quis quidem doloribus eos, dolore
					ea iusto impedit! Voluptatum necessitatibus eum beatae,
					adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
					amet consectetur adipisicing elit. Iste error quibusdam ipsa
					quis quidem doloribus eos, dolore ea iusto impedit!
					Voluptatum necessitatibus eum beatae, adipisci voluptas a
					odit modi eos! Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Iste error quibusdam ipsa quis quidem
					doloribus eos, dolore ea iusto impedit! Voluptatum
					necessitatibus eum beatae, adipisci voluptas a odit modi
					eos! Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Iste error quibusdam ipsa quis quidem doloribus eos,
					dolore ea iusto impedit! Voluptatum necessitatibus eum
					beatae, adipisci voluptas a odit modi eos! Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Iste error
					quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
					impedit! Voluptatum necessitatibus eum beatae, adipisci
					voluptas a odit modi eos!
					<br />
					<br />
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Iste error quibusdam ipsa quis quidem doloribus eos, dolore
					ea iusto impedit! Voluptatum necessitatibus eum beatae,
					adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
					amet consectetur adipisicing elit. Iste error quibusdam ipsa
					quis quidem doloribus eos, dolore ea iusto impedit!
					Voluptatum necessitatibus eum beatae, adipisci voluptas a
					odit modi eos! Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Iste error quibusdam ipsa quis quidem
					doloribus eos, dolore ea iusto impedit! Voluptatum
					necessitatibus eum beatae, adipisci voluptas a odit modi
					eos! Lorem, ipsum dolor sit amet consectetur.
				</p>
			</div>
		</div>
	);
}

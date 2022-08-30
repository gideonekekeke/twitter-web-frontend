import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";

import { FcLike } from "react-icons/fc";
import styled from "styled-components";
import { FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import UserDetails from "./UserDetails";
const AllPosts = () => {
	const [data, setData] = React.useState([]);

	const getAllTweets = async () => {
		await axios.get(`http://localhost:18000/api/tweet`).then((res) => {
			console.log(res);
			setData(res.data.data);
		});
	};

	React.useEffect(() => {
		getAllTweets();
	}, []);
	return (
		<Container>
			{data?.map((props) => (
				<Card>
					<Holder to='/details'>
						<UserDetails id={props?.user} />

						<TextHold>
							<Desc>{props.title}</Desc>

							{props.tweetImage ? <Image src={props.tweetImage} /> : null}
							<IconHolder>
								<span style={{ display: "flex", alignItems: "center" }}>
									{" "}
									<FaRegComment /> 10
								</span>
								<span
									style={{
										display: "flex",
										alignItems: "center",
										color: "green",
									}}>
									<FaRetweet />
									20
								</span>
								<span
									style={{
										display: "flex",
										alignItems: "center",
										color: "pink",
									}}>
									{" "}
									<FcLike /> 15
								</span>
								<span style={{ display: "flex", alignItems: "center" }}>
									<FiShare /> 5
								</span>
							</IconHolder>
						</TextHold>
					</Holder>
				</Card>
			))}
		</Container>
	);
};

export default AllPosts;

const IconHolder = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
	font-size: 17px;
	width: 70%;
	cursor: pointer;
`;

const Image = styled.img`
	height: 300px;
	background-color: gray;
	width: 650px;
	margin-top: 20px;
	border-radius: 10px;
	object-fit: cover;

	@media screen and (max-width: 768px) {
		width: 150px;
	}
`;

const TextHold = styled.div`
	margin-left: 60px;
`;

const Holder = styled(Link)`
	// display: flex;

	margin-left: 20px;
	cursor: pointer;
	text-decoration: none;
	color: white;
	padding-left: 10px;

	width: 100%;

	// background-color: red;
`;
const UserImage = styled.div`
	height: 45px;
	width: 45px;
	border-radius: 50px;
	background-color: silver;
`;
const UserName = styled.div``;
const Desc = styled.div`
	width: 600px;
	margin-top: 20px;
	font-size: 17px;
`;
const Card = styled.div`
	/* height: 200px; */

	border-top: 1px solid #202327;
	margin-left: 20px;
	padding-bottom: 20px;
`;
const Container = styled.div`
	margin-top: 20px;
	height: auto;
	border-left: 1px solid #202327;
	border-right: 1px solid #202327;
`;

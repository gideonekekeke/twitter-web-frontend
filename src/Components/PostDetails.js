import React from "react";
import styled from "styled-components";
import { FaRegComment, FaRetweet } from "react-icons/fa";

import { FcLike } from "react-icons/fc";
import { BsFillCameraVideoFill, BsStars } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import { RiFileGifFill } from "react-icons/ri";
import { FiShare } from "react-icons/fi";
const PostDetails = () => {
	return (
		<Container>
			<UserPostHold>
				<div style={{ display: "flex" }}>
					<UserImage1 />
					<NameHold>
						<Name>Gideon ekeke</Name>
						<span style={{ color: "grey" }}>@Giddycode 6h</span>
					</NameHold>
				</div>
				<PostText>Master Python for Free. Thread: 🧵</PostText>
				<br />
				<span style={{ color: "grey" }}>4:29 AM · Aug 23, 2022</span>
				<br />
				<TweetCount>
					<MainHold>
						<span style={{ marginRight: " 20px" }}>
							1,176 <span style={{ color: "grey" }}>Retweets</span>
						</span>
						<span style={{ marginRight: " 20px" }}>
							23 <span style={{ color: "grey" }}> Quote Tweets</span>
						</span>
						<span style={{ marginRight: " 20px" }}>
							300 <span style={{ color: "grey" }}> Likes</span>
						</span>
					</MainHold>
				</TweetCount>

				<IconHolder1>
					<span style={{ display: "flex", alignItems: "center" }}>
						{" "}
						<FaRegComment />
					</span>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							color: "green",
						}}>
						<FaRetweet />
					</span>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							color: "pink",
						}}>
						{" "}
						<FcLike />
					</span>
					<span style={{ display: "flex", alignItems: "center" }}>
						<FiShare />
					</span>
				</IconHolder1>

				<SecondComp>
					<UserImage />
					<InputHolder>
						<input placeholder='Tweet your reply' />
					</InputHolder>
					<Button>Reply</Button>
				</SecondComp>
				<div style={{ display: "flex", marginTop: "10px" }}>
					<UserImage1 />
					<NameHold>
						<Name>
							Gideon ekeke <span style={{ color: "grey" }}>@Giddycode 6h</span>
						</Name>

						<PostText>Master Python for Free. Thread: 🧵</PostText>
					</NameHold>
				</div>
			</UserPostHold>
		</Container>
	);
};

export default PostDetails;

const Button = styled.div`
	margin: 10px;
	width: 100px;
	background-color: #1a8cd8;
	color: white;
	padding: 10px 10px;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Maining = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100px;
`;
const Hold = styled.div`
	margin-top: 10px;
	display: flex;
	align-items: center;
	font-size: 20px;
	justify-content: space-between;

	width: 100%;
`;
const UserImage1 = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: silver;
	/* margin-left: 20px; */
`;
const InputHolder = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
	/* width: 90%; */

	justify-content: space-between;

	input {
		width: 500px;

		background-color: transparent;
		border: none;
		font-size: 20px;
		color: white;

		height: 50px;
		outline: none;

		@media screen and (max-width: 768px) {
			width: 100%;
		}
	}
`;
const SecondComp = styled.div`
	display: flex;
	/* align-items: center; */
	margin-top: 20px;
	border-bottom: 1px solid #202327;
`;

const IconHolder1 = styled.div`
	border-top: 1px solid grey;
	border-bottom: 1px solid grey;
	display: flex;
	justify-content: space-around;
	align-items: center;

	font-size: 25px;
	padding-top: 20px;
	padding-bottom: 20px;
`;

const MainHold = styled.div`
	padding: 20px;
	justify-content: space-between;
`;
const TweetCount = styled.div`
	border-top: 1px solid grey;
	border-bottom: 1px solid grey;
`;

const UserPostHold = styled.div`
	display: flex;
	padding: 20px;
	flex-direction: column;
`;
const UserImage = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: silver;
`;
const NameHold = styled.div`
	margin-left: 10px;
`;
const Name = styled.div`
	font-weight: bold;
`;
const PostText = styled.div`
	margin-top: 10px;
	font-size: 20px;
`;

const Container = styled.div`
	height: 100%;
	border-left: 1px solid #202327;
	border-right: 1px solid #202327;
`;

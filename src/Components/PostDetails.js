import React from "react";
import styled from "styled-components";
import { FaRegComment, FaRetweet } from "react-icons/fa";

import { FcLike } from "react-icons/fc";
import { BsFillCameraVideoFill, BsStars } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import { RiFileGifFill } from "react-icons/ri";
import { FiShare } from "react-icons/fi";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserDetails from "./UserDetails";
import TweetUserDetails from "./TweetsUserDetails";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import LoadingState from "./LoadingState";
import LikeComp from "./LikeComp";
const PostDetails = () => {
	const user = useSelector((state) => state?.persistedReducer?.current);
	const [data, setData] = React.useState([]);
	const [com, setCom] = React.useState();
	const [userData, setUserData] = React.useState([]);
	const [load, setLoad] = React.useState(false);
	const { id } = useParams();

	console.log(id);

	const fetchPost = async () => {
		await axios.get(`http://localhost:18000/api/tweet/${id}`).then((res) => {
			console.log("this is tweetss", res.data.data);
			setData(res.data.data);
		});
	};

	const toggleLoad = () => {
		setLoad(true);
	};

	const postComment = async (event) => {
		if (!user) {
			Swal.fire({
				icon: "error",
				title: "You do not have permission to comment on this page",
			});
		} else {
			toggleLoad();

			await axios
				.post(`http://localhost:18000/api/comment/comme/${data._id}`, {
					title: com,
					userCommented: user._id,
				})
				.then((res) => {
					console.log(res);
					setCom(com);
					window.location.reload();

					// event.target.reset();
					setLoad(false);
				});
		}
	};

	const getUser = async () => {
		await axios
			.get(`http://localhost:18000/api/user/${user._id}`)
			.then((res) => {
				console.log(res);
				setUserData(res.data.data);
			});
	};

	// React.useEffect(() => {
	// 	fetchPost();
	// 	getUser();
	// }, []);
	React.useEffect(() => {
		fetchPost();
		getUser();
	}, [user, data]);

	return (
		<>
			{load ? <LoadingState /> : null}
			<Container>
				<UserPostHold>
					<div style={{ display: "flex" }}>
						<TweetUserDetails ids={data?.user} />
					</div>
					<PostText>{data?.title}</PostText>
					{data?.tweetImage ? <Image src={data?.tweetImage} /> : null}
					<br />
					<span style={{ color: "grey" }}>4:29 AM · Aug 23, 2022</span>
					<br />
					<TweetCount>
						<MainHold>
							<span style={{ marginRight: "20px" }}>
								{data?.re_tweet?.length}
								<span style={{ color: "grey" }}>Retweets</span>
							</span>
							<span style={{ marginRight: " 20px" }}>
								{data?.comment?.length}{" "}
								<span style={{ color: "grey" }}> Comments</span>
							</span>
							<span style={{ marginRight: " 20px" }}>
								{data?.like?.length}{" "}
								<span style={{ color: "grey" }}> Likes</span>
							</span>
						</MainHold>
					</TweetCount>

					<IconHolder1>
						<span
							style={{
								display: "flex",
								alignItems: "center",
								cursor: "pointer",
							}}>
							{" "}
							<FaRegComment style={{ cursor: "pointer" }} />
						</span>
						<span
							style={{
								display: "flex",
								alignItems: "center",
								color: "green",
								cursor: "pointer",
							}}>
							<FaRetweet style={{ cursor: "pointer" }} />
						</span>
						<LikeComp data={data} id={id} />
						<span
							style={{
								display: "flex",
								alignItems: "center",
								cursor: "pointer",
							}}>
							<FiShare style={{ cursor: "pointer" }} />
						</span>
					</IconHolder1>

					<SecondComp>
						<UserImage src={userData?.profileImage} />
						<InputHolder>
							<input
								onChange={(e) => {
									setCom(e.target.value);
								}}
								placeholder='Tweet your reply'
							/>
						</InputHolder>
						{com == "" ? (
							<Button
								onClick={() => {
									Swal.fire({
										icon: "error",
										title: "Field is required",
									});
								}}>
								Reply
							</Button>
						) : (
							<Button
								onClick={() => {
									postComment();
									setCom(com);
								}}>
								Reply
							</Button>
						)}
					</SecondComp>
					{data?.comment?.map((props) => (
						<div style={{ display: "flex", marginTop: "10px" }}>
							<NameHold>
								<UserDetails id={props?.userCommented} />
								<PostText>{props.title}</PostText>
							</NameHold>
						</div>
					))}
				</UserPostHold>
			</Container>
		</>
	);
};

export default PostDetails;

const Image = styled.img`
	height: 300px;
	background-color: gray;
	width: 100%;
	margin-top: 20px;
	border-radius: 10px;
	object-fit: cover;

	@media screen and (max-width: 768px) {
		width: 150px;
	}
`;

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

	/* background-color: red; */
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
const UserImage = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: silver;
	object-fit: cover;
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
	margin-left: 55px;
`;

const Container = styled.div`
	height: 100%;
	border-left: 1px solid #202327;
	border-right: 1px solid #202327;
`;

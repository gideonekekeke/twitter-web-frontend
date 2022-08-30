import React from "react";
import styled from "styled-components";
import { FiMoreVertical } from "react-icons/fi";
import axios from "axios";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";

const LastComponents = () => {
	const url = "http://localhost:18000";
	const socket = io("http://localhost:18000");
	const [data, setData] = React.useState([]);
	const [dataSingle, setDataSingle] = React.useState([]);
	const user = useSelector((state) => state.persistedReducer.current);
	const getUser = async () => {
		await axios.get(`${url}/api/user`).then((res) => {
			console.log(res);
			setData(res.data.data);
		});
	};
	const getSingleUser = async () => {
		await axios.get(`${url}/api/user/${user._id}`).then((res) => {
			console.log(res);
			setDataSingle(res.data.data);
		});
	};

	React.useEffect(() => {
		getUser();
		getSingleUser();
		socket.on("observerUser", () => {
			getUser();
		});
	}, []);
	return (
		<Container>
			<SearchHold>
				<input placeholder='Search' />
			</SearchHold>

			<FollowCard>
				<h3>Who to follow</h3>

				{data.map((props) => (
					<>
						{props._id === user?._id ? null : (
							<Holder>
								<Hol>
									{" "}
									<UserImage src={props.profileImage} />
									<Link
										style={{ textDecoration: "none" }}
										to={`/profile/${props._id}`}>
										<div>
											<Text>{props.name}</Text>
											<span>@{props.username}</span>
										</div>
									</Link>
								</Hol>
								{dataSingle?.following?.find(
									(el) => el.userFollow === props?._id,
								) ? (
									<Button>Following</Button>
								) : (
									<Button
										onClick={() => {
											// toggleLoad();
											axios
												.post(
													`http://localhost:18000/api/following/folln/${user._id}`,
													{
														userFollow: props._id,
													},
												)
												.then((res) => {
													console.log(res);
													// window.location.reload();
												});
											axios
												.post(
													`http://localhost:18000/api/follower/fol/${props._id}`,
													{
														userFollower: user._id,
													},
												)
												.then((res) => {
													console.log(res);
													window.location.reload();
												});
										}}>
										Follow
									</Button>
								)}
							</Holder>
						)}
					</>
				))}
			</FollowCard>
			<br />
			<FollowCard>
				<h3>Trends for you</h3>

				<Holder>
					<Hol>
						<div>
							<Text>Man of the match</Text>
							<span>Sport</span>
						</div>
					</Hol>

					<FiMoreVertical />
				</Holder>
			</FollowCard>
		</Container>
	);
};

export default LastComponents;
const Button = styled.div`
	margin: 10px;
	width: 80px;
	background-color: #d7dbdc;
	color: black;
	padding: 10px 10px;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-weight: bold;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const UserImage = styled.img`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: silver;
	object-fit: cover;
`;
const Text = styled.div`
	margin-left: 10px;
	font-weight: bold;
	color: white;
`;
const Holder = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Hol = styled.div`
	display: flex;

	span {
		margin-left: 10px;
		font-size: 14px;
		color: grey;
	}
`;
const FollowCard = styled.div`
	/* height: 200px; */
	width: 300px;
	background-color: #202327;
	border-radius: 10px;
	padding: 10px;
`;
const SearchHold = styled.div`
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	input {
		height: 40px;
		width: 300px;
		border-radius: 20px;
		padding-left: 20px;
		background-color: #202327;
		border: none;
		outline: none;
		font-size: 17px;
		color: white;
	}
`;

const Container = styled.div`
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

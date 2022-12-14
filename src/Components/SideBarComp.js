import React from "react";
import styled from "styled-components";

import { RiHome3Fill, RiHome7Line } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import TweetModal from "./TweetModal";
import RegisterationPage from "./RegisterationPage";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { signOut } from "./Global/actions";
const SideBarComp = () => {
	const [show, setShow] = React.useState(false);
	const [show2, setShow2] = React.useState(false);
	const [data, setData] = React.useState([]);
	const dispatch = useDispatch();

	const user = useSelector((state) => state?.persistedReducer?.current);

	const toggleShow = () => {
		setShow(!show);
	};
	const toggleShow2 = () => {
		setShow2(!show2);
	};

	const getUser = async () => {
		await axios
			.get(`http://localhost:18000/api/user/${user._id}`)
			.then((res) => {
				console.log(res);
				setData(res.data.data);
			});
	};

	React.useEffect(() => {
		getUser();
	}, []);

	return (
		<Container>
			<Logo>
				<BsTwitter />
			</Logo>
			<br />
			<br />
			<Hold>
				<MainHold to='/'>
					<Icony>
						<RiHome7Line />
					</Icony>
					<Text>Home</Text>
				</MainHold>
				<MainHold to='/explore'>
					<Icony>
						<FaHashtag />
					</Icony>
					<Text>Explore</Text>
				</MainHold>
				{user ? (
					<>
						<MainHold to='/notifications'>
							<Icony>
								<BiBell />
							</Icony>
							<Text>Notifications</Text>
						</MainHold>
						<MainHold to='/messages'>
							<Icony>
								<MdOutlineMailOutline />
							</Icony>
							<Text>Messages</Text>
						</MainHold>
						<MainHold to='/bookmark'>
							<Icony>
								<BsBookmark />
							</Icony>
							<Text>Bookmark</Text>
						</MainHold>
						<MainHold to='/list'>
							<Icony>
								<FaRegListAlt />
							</Icony>
							<Text>Lists</Text>
						</MainHold>
						<MainHold to={`/profile/${user._id}`}>
							<Icony>
								<FaUser />
							</Icony>
							<Text>Profile</Text>
						</MainHold>
					</>
				) : null}
				{user ? (
					<MainHold onClick={toggleShow} to='/'>
						<Button>Tweet</Button>
					</MainHold>
				) : null}
				<br />
				<br />

				{user ? (
					<MainHold
						onClick={() => {
							dispatch(signOut(user));
							window.location.reload();
						}}
						to='/'>
						<div
							onClick={() => {
								dispatch(signOut(user));
								window.location.reload();
							}}
							style={{ display: "flex", alignItems: "center" }}>
							<img
								src={data?.profileImage}
								alt='profile'
								style={{
									height: "50px",
									width: "50px",
									objectFit: "cover",
									backgroundColor: "silver",
									borderRadius: "50%",
								}}
							/>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									marginLeft: "10px",
								}}>
								{" "}
								<span style={{ fontSize: "17px" }}>{data?.name}</span>
								<span
									style={{
										fontSize: "13px",

										color: "grey",
									}}>
									@{data?.username}
								</span>
							</div>
						</div>
					</MainHold>
				) : (
					<MainHold onClick={toggleShow2} to='/'>
						<Button2>Create Account</Button2>
					</MainHold>
				)}
			</Hold>

			{show ? <TweetModal toggleShow={toggleShow} /> : null}
			{show2 ? <RegisterationPage toggleShow2={toggleShow2} /> : null}
		</Container>
	);
};

export default SideBarComp;

const Button2 = styled.div`
	margin: 10px;
	width: 150px;
	background-color: #1a8cd8;
	color: white;
	padding: 20px 30px;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 15px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const Button = styled.div`
	margin: 10px;
	width: 120px;
	background-color: #1a8cd8;
	color: white;
	padding: 10px 30px;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const Hold = styled.div`
	position: fixed;

	height: 100vh;
	margin-top: 100px;
	/* background-color: red; */
`;
const MainHold = styled(Link)`
	display: flex;
	align-items: center;
	font-size: 23px;
	margin-left: 90px;
	padding-bottom: 10px;
	text-decoration: none;
	color: white;

	border-radius: 20px;
	transition: all 350ms ease-in-out;
	cursor: pointer;
	:hover {
		background-color: #202327;
	}
`;
const Icony = styled.div`
	margin: 10px;
`;
const Text = styled.div`
	margin: 10px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const Logo = styled.div`
	margin-left: 100px;
	font-size: 30px;
	margin-top: 20px;
`;
const Container = styled.div`
	display: flex;

	flex-direction: column;
	position: sticky;
	top: 0;
	height: 100vh;
	@media screen and (max-width: 768px) {
		width: 100px;
	}
	/* background-color: red; */
`;

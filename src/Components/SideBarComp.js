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
const SideBarComp = () => {
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
				<MainHold to='/profile'>
					<Icony>
						<FaUser />
					</Icony>
					<Text>Profile</Text>
				</MainHold>
				<MainHold to='/tweet'>
					<Button>Tweet</Button>
				</MainHold>
			</Hold>
		</Container>
	);
};

export default SideBarComp;

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

	@media screen and (max-width: 768px) {
		width: 100px;
	}
	/* background-color: red; */
`;

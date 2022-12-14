import React from "react";
import { ImCancelCircle } from "react-icons/im";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { TbCameraPlus } from "react-icons/tb";
import { AiFillSave } from "react-icons/ai";
import axios from "axios";
import LoadingState from "./LoadingState";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const UnFollowerPage = ({ toggleUnfollow }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "rgba(53, 138, 196, 0.5)",
				height: "100vh",
				position: "fixed",
				width: "100%",
				zIndex: "99999",
				transition: "all 350ms",
			}}>
			<Card>
				<Head>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontSize: "20px", cursor: "pointer" }}>
							<ImCancelCircle onClick={toggleUnfollow} />
						</span>
						<h4> UnFollow name</h4>
					</div>
				</Head>
				<Hold>
					<div style={{ display: "flex" }}>
						<p>
							Their Tweets will no longer show up in your home timeline.you can
							still view their profile, unless their tweets are Protected
						</p>
					</div>
					<div style={{ display: "flex" }}>
						{" "}
						<Button onClick={toggleUnfollow}>Cancel</Button>
						<Button>Unfollow</Button>
					</div>
				</Hold>
			</Card>
		</div>
	);
};

export default UnFollowerPage;

const Hold = styled.div`
	/* display: flex;
	justify-content: space-between; */
`;
const TextHold = styled(Link)`
	margin-left: 10px;
	text-decoration: none;
`;
const Text = styled.div`
	color: white;
`;

const ProfileImage = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: grey;

	object-fit: cover;
`;

const Head = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	background-color: black;

	h4 {
		margin-left: 10px;
	}
`;

const Button = styled.div`
	margin: 10px;
	width: 100px;
	background-color: white;
	color: black;
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

const Card = styled.div`
	/* height: 200px; */
	width: 500px;
	background-color: black;
	margin-top: 20px;
	border-radius: 10px;
	padding: 20px;
	transition: all 350ms;
`;

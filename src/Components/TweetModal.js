import React from "react";
import styled from "styled-components";
import { BsFillCameraVideoFill, BsStars } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import { RiFileGifFill } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
const TweetModal = ({ toggleShow }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				// alignItems: "center",
				background: "rgba(53, 138, 196, 0.5)",
				height: "100vh",
				position: "fixed",
				width: "100%",
				zIndex: "1000",
				transition: "all 350ms",
			}}>
			<Card>
				<span style={{ fontSize: "20px", cursor: "pointer" }}>
					<ImCancelCircle onClick={toggleShow} />
				</span>
				<SecondComp>
					<UserImage />
					<InputHolder>
						<input placeholder="What's happening?" />
						<Hold>
							<Maining>
								{" "}
								<span style={{ color: "#358AC4" }}>
									<MdInsertPhoto />
								</span>
								<span style={{ color: "#358AC4" }}>
									<BsFillCameraVideoFill />
								</span>
								<span style={{ color: "#358AC4" }}>
									<RiFileGifFill />
								</span>
							</Maining>
							<Button>Tweet</Button>
						</Hold>
					</InputHolder>
				</SecondComp>
			</Card>
		</div>
	);
};

export default TweetModal;

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

	width: 400px;
`;
const UserImage = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: silver;
	margin-left: 20px;
`;
const InputHolder = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
	/* width: 90%; */
	border-bottom: 1px solid #202327;

	input {
		/* width: 500px; */

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
	width: 100%;
`;

const Card = styled.div`
	height: 200px;
	width: 500px;
	background-color: black;
	margin-top: 20px;
	border-radius: 10px;
	padding: 20px;
	transition: all 350ms;
`;

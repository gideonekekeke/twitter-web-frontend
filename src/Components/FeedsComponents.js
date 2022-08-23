import React from "react";
import { BsFillCameraVideoFill, BsStars } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import { RiFileGifFill } from "react-icons/ri";
import styled from "styled-components";
import AllPosts from "./AllPosts";
const FeedsComponents = () => {
	return (
		<Container>
			<FirstComp>
				<h3>Home</h3>
				<span>
					<BsStars />
				</span>
			</FirstComp>

			<SecondComp>
				<UserImage />
				<InputHolder>
					<input placeholder="What's happening?" />
					<Hold>
						<Maining>
							{" "}
							<span>
								<MdInsertPhoto />
							</span>
							<span>
								<BsFillCameraVideoFill />
							</span>
							<span>
								<RiFileGifFill />
							</span>
						</Maining>
						<Button>Tweet</Button>
					</Hold>
				</InputHolder>
			</SecondComp>
			<AllPosts />
		</Container>
	);
};

export default FeedsComponents;

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
	width: 90%;
	border-bottom: 1px solid #202327;

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
`;
const FirstComp = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h3 {
		margin-left: 20px;
	}
	span {
		margin-right: 20px;
	}
`;
const Container = styled.div`
	height: 100vh;
	border-left: 1px solid #202327;
	border-right: 1px solid #202327;
`;

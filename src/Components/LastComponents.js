import React from "react";
import styled from "styled-components";
import { FiMoreVertical } from "react-icons/fi";
const LastComponents = () => {
	return (
		<Container>
			<SearchHold>
				<input placeholder='Search' />
			</SearchHold>

			<FollowCard>
				<h3>Who to follow</h3>

				<Holder>
					<Hol>
						{" "}
						<UserImage />
						<div>
							<Text>Gideon ekeke</Text>
							<span>@giddyfire</span>
						</div>
					</Hol>
					<Button>Follow</Button>
				</Holder>
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
const UserImage = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: silver;
`;
const Text = styled.div`
	margin-left: 10px;
	font-weight: bold;
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
	height: 200px;
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

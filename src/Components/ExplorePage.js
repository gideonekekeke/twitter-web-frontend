import React from "react";
import styled from "styled-components";
import { FiMoreHorizontal } from "react-icons/fi";
import pic from "../Components/img/1.jpg";
const ExplorePage = () => {
	return (
		<Container>
			<SearchHold>
				<input placeholder='Search' />
			</SearchHold>
			<ImageHold src={pic} />

			<FollowCard>
				<h3>Trends for you</h3>

				<Holder>
					<Hol>
						<div>
							<Text>Man of the match</Text>
							<span>Sport</span>
						</div>
					</Hol>

					<FiMoreHorizontal />
				</Holder>
				<Holder>
					<Hol>
						<div>
							<Text>Man of the match</Text>
							<span>Sport</span>
						</div>
					</Hol>

					<FiMoreHorizontal />
				</Holder>
				<Holder>
					<Hol>
						<div>
							<Text>Man of the match</Text>
							<span>Sport</span>
						</div>
					</Hol>

					<FiMoreHorizontal />
				</Holder>
			</FollowCard>
		</Container>
	);
};

export default ExplorePage;
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
	width: 98%;
	background-color: #202327;
	border-radius: 10px;
	padding: 10px;
	margin-top: 10px;
`;

const ImageHold = styled.img`
	height: 400px;
	width: 100%;
	background-color: silver;
	object-fit: cover;
`;

const SearchHold = styled.div`
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;

	input {
		height: 40px;
		width: 80%;
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
	height: 100vh;
	border-left: 1px solid #202327;
	border-right: 1px solid #202327;
	overflow: hidden;
`;

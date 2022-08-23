import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";

import { FcLike } from "react-icons/fc";
import styled from "styled-components";
import { FiShare } from "react-icons/fi";
const AllPosts = () => {
	return (
		<Container>
			<Card>
				<Holder>
					<UserImage />
					<TextHold>
						<UserName>Name</UserName>
						<Desc>dommy text</Desc>

						<Image />
						<IconHolder>
							<span style={{ display: "flex", alignItems: "center" }}>
								{" "}
								<FaRegComment /> 10
							</span>
							<span
								style={{
									display: "flex",
									alignItems: "center",
									color: "green",
								}}>
								<FaRetweet />
								20
							</span>
							<span
								style={{
									display: "flex",
									alignItems: "center",
									color: "pink",
								}}>
								{" "}
								<FcLike /> 15
							</span>
							<span style={{ display: "flex", alignItems: "center" }}>
								<FiShare /> 5
							</span>
						</IconHolder>
					</TextHold>
				</Holder>
			</Card>
		</Container>
	);
};

export default AllPosts;

const IconHolder = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
	font-size: 17px;
	width: 70%;
	cursor: pointer;
`;

const Image = styled.div`
	height: 300px;
	background-color: gray;
	width: 700px;
	margin-top: 20px;
	border-radius: 10px;

	@media screen and (max-width: 768px) {
		width: 150px;
	}
`;

const TextHold = styled.div`
	margin-left: 10px;
`;

const Holder = styled.div`
	display: flex;

	margin: 20px;
`;
const UserImage = styled.div`
	height: 45px;
	width: 45px;
	border-radius: 50px;
	background-color: silver;
`;
const UserName = styled.div``;
const Desc = styled.div``;
const Card = styled.div`
	height: 200px;

	border-top: 1px solid #202327;
`;
const Container = styled.div`
	margin-top: 20px;
`;

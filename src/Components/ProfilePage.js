import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import pic from "./img/1.jpg";
import pic1 from "./img/3.jpg";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FiShare } from "react-icons/fi";
import EditProfilePage from "./EditProfilePage";
const ProfilePage = () => {
	const [tweets, setTweets] = React.useState(false);
	const [replies, setReplies] = React.useState(false);
	const [media, setMedia] = React.useState(false);
	const [like, setLike] = React.useState(false);
	const [prof, setProf] = React.useState(false);

	const toggleTweet = () => {
		setTweets(true);
		setLike(false);
		setMedia(false);
		setReplies(false);
	};
	const toggleReplies = () => {
		setTweets(false);
		setLike(false);
		setMedia(false);
		setReplies(true);
	};
	const toggleMedia = () => {
		setTweets(false);
		setLike(false);
		setMedia(true);
		setReplies(false);
	};
	const toggleLikes = () => {
		setTweets(false);
		setLike(true);
		setMedia(false);
		setReplies(false);
	};

	const toggleProf = () => {
		setProf(!prof);
	};

	return (
		<>
			{prof ? <EditProfilePage toggleProf={toggleProf} /> : null}
			<Container>
				<Head>
					<span>
						<BiArrowBack />
					</span>
					<NameHold>
						<Name>Gideon ekeke</Name>
						<TweetHold>27 tweets</TweetHold>
					</NameHold>
				</Head>
				<CoverImage src={pic} />
				<ProfileImageHold>
					<ProfileImage src={pic1} />

					<ButHold onClick={toggleProf}>
						<Button>Edit Profile</Button>
					</ButHold>
				</ProfileImageHold>

				<ProfileNameHold>
					<Name>Gideon ekeke</Name>

					<TweetHold>@GiddyCode</TweetHold>
					<Bio>Life is Simple, Be simple and Bold</Bio>

					<FollowerHold>
						<Following>
							<span>0</span> Following
						</Following>
						<Followers>
							<span>0</span> Followers
						</Followers>
					</FollowerHold>
				</ProfileNameHold>
				<TweetTable>
					<span onClick={toggleTweet}>Tweets</span>
					<span onClick={toggleReplies}>Tweets & replies</span>
					<span onClick={toggleMedia}>Media</span>
					<span onClick={toggleLikes}>Likes</span>
				</TweetTable>
				<br />
				{tweets ? (
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
				) : (
					<>
						{replies ? (
							<Card>
								<Holder>
									<UserImage />
									<TextHold>
										<UserName>Name</UserName>
										<Desc>You replied to this message</Desc>

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
						) : (
							<>
								{media ? (
									<Card>
										<Holder>
											<UserImage />
											<TextHold>
												<UserName>Name</UserName>
												<Desc>dommy text</Desc>

												<Image />
												<IconHolder>
													<span
														style={{ display: "flex", alignItems: "center" }}>
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
													<span
														style={{ display: "flex", alignItems: "center" }}>
														<FiShare /> 5
													</span>
												</IconHolder>
											</TextHold>
										</Holder>
									</Card>
								) : (
									<>
										{like ? (
											<Card>
												<Holder>
													<UserImage />
													<TextHold>
														<UserName>Gideon ekeke</UserName>
														<Desc>you likes this tweet</Desc>

														<IconHolder>
															<span
																style={{
																	display: "flex",
																	alignItems: "center",
																}}>
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
															<span
																style={{
																	display: "flex",
																	alignItems: "center",
																}}>
																<FiShare /> 5
															</span>
														</IconHolder>
													</TextHold>
												</Holder>
											</Card>
										) : (
											<Card>
												<Holder>
													<UserImage />
													<TextHold>
														<UserName>Gideon ekeke</UserName>
														<Desc>dommy text</Desc>

														<Image />
														<IconHolder>
															<span
																style={{
																	display: "flex",
																	alignItems: "center",
																}}>
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
															<span
																style={{
																	display: "flex",
																	alignItems: "center",
																}}>
																<FiShare /> 5
															</span>
														</IconHolder>
													</TextHold>
												</Holder>
											</Card>
										)}
									</>
								)}
							</>
						)}
					</>
				)}
			</Container>
		</>
	);
};

export default ProfilePage;

const IconHolder = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
	font-size: 17px;
	width: 70%;
	/* background-color: red; */
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
	width: 100%;
`;

const Holder = styled.div`
	display: flex;

	margin: 20px;
	width: 100%;
	/* background-color: blue; */
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
	/* height: 200px; */

	border-top: 1px solid #202327;
`;
const TweetTable = styled.div`
	display: flex;
	justify-content: space-around;
	font-weight: bold;
	margin-top: 30px;

	span {
		padding: 10px 20px;
		transition: all 350ms;
		border-radius: 10px;
		cursor: pointer;

		:hover {
			background-color: grey;
		}
	}
`;

const FollowerHold = styled.div`
	font-size: 15px;
	display: flex;
	align-items: center;
	margin-top: 5px;

	span {
		color: white;
	}
`;
const Following = styled.div`
	color: grey;
`;
const Followers = styled.div`
	margin-left: 20px;
	color: grey;
`;

const ProfileNameHold = styled.div`
	margin-left: 20px;
	font-size: 25px;
`;
const Bio = styled.div`
	font-size: 20px;
	margin-top: 10px;
`;

const ButHold = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;

	/* background-color: red; */
`;
const Button = styled.div`
	margin: 10px;
	width: 100px;
	background-color: black;
	color: white;
	padding: 10px 10px;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: 1px solid grey;
	font-weight: bold;
	transition: all 350ms;

	:hover {
		transform: scale(0.98);
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const ProfileImage = styled.img`
	height: 120px;
	width: 120px;
	background-color: silver;
	border-radius: 50%;
	position: absolute;
	margin-top: -60px;
	margin-left: 20px;
	object-fit: cover;
	border: 6px solid black;
`;
const ProfileImageHold = styled.div`
	display: flex;
	justify-content: space-between;
	/* padding: 20px; */
`;

const CoverImage = styled.img`
	height: 200px;
	width: 100%;
	background: silver;
	object-fit: cover;
`;

const Head = styled.div`
	display: flex;
	/* align-items: center; */
	background-color: black;
	position: sticky;
	top: 0;
	padding: 20px;
	font-size: 20px;
	z-index: 999;
`;
const NameHold = styled.div`
	margin-left: 20px;
`;
const Name = styled.div`
	font-weight: bold;
`;

const TweetHold = styled.div`
	font-size: 15px;
	color: grey;
`;

const Container = styled.div`
	height: 100%;
	border-left: 1px solid #202327;
	border-right: 1px solid #202327;
`;

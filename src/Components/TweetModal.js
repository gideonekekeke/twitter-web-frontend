import React from "react";
import styled from "styled-components";
import { BsFillCameraVideoFill, BsStars } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import { RiFileGifFill } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import LoadingState from "./LoadingState";
const TweetModal = ({ toggleShow }) => {
	const [data, setData] = React.useState([]);

	const [title, setTitle] = React.useState("");
	const [tweetImage, setTweetImage] = React.useState("");
	const [fileUrl, setFileUrl] = React.useState("");
	const [load, setLoad] = React.useState(false);

	const user = useSelector((state) => state?.persistedReducer?.current);

	const getUser = async () => {
		await axios
			.get(`http://localhost:18000/api/user/${user._id}`)
			.then((res) => {
				console.log(res);
				setData(res.data.data);
			});
	};

	const toggleLoad = () => {
		setLoad(true);
	};

	const onChangeFile = (e) => {
		const file = e.target.files[0];
		const fileRef = URL.createObjectURL(file);

		setTweetImage(file);
		setFileUrl(fileRef);
	};

	const postTweet = async () => {
		if (fileUrl && title) {
			toggleLoad();

			const formdata = new FormData();

			formdata.append("title", title);
			formdata.append("tweetImage", tweetImage);

			const config = {
				headers: {
					"content-type": "multipart/form-data",
				},
			};

			await axios
				.post(
					`http://localhost:18000/api/tweet/tweetingimage/${user._id}`,
					formdata,
					config,
				)
				.then(() => {
					Swal.fire({
						icon: "success",
						title: "Tweet Posted Successfully",
						showConfirmButton: false,
					});
					setLoad(false);
					window.location.reload();
				})
				.catch((err) => {
					Swal.fire({
						icon: "error",
						title: "An error occurred",
						showConfirmButton: false,
					});
					setLoad(false);
					window.location.reload();
				});
		} else if (fileUrl) {
			toggleLoad();

			const formdata = new FormData();

			formdata.append("title", title);
			formdata.append("tweetImage", tweetImage);

			const config = {
				headers: {
					"content-type": "multipart/form-data",
				},
			};

			await axios
				.post(
					`http://localhost:18000/api/tweet/tweetingonlyimage/${user._id}`,
					formdata,
					config,
				)
				.then(() => {
					Swal.fire({
						icon: "success",
						title: "Tweet Posted Successfully",
						showConfirmButton: false,
					});
					setLoad(false);
					window.location.reload();
				})
				.catch((err) => {
					Swal.fire({
						icon: "error",
						title: "An error occurred",
						showConfirmButton: false,
					});
					setLoad(false);
					window.location.reload();
				});
		} else if (title) {
			toggleLoad();
			await axios
				.post(`http://localhost:18000/api/tweet/tweetingtext/${user._id}`, {
					title,
				})
				.then(() => {
					Swal.fire({
						icon: "success",
						title: "Tweet Posted Successfully",
						showConfirmButton: false,
					});
					setLoad(false);
					window.location.reload();
				})
				.catch((err) => {
					Swal.fire({
						icon: "error",
						title: "An error occurred",
						showConfirmButton: false,
					});
					setLoad(false);
					window.location.reload();
				});
		}
	};

	React.useEffect(() => {
		getUser();
	}, []);
	return (
		<>
			{load ? <LoadingState /> : null}
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
						<UserImage src={data?.profileImage} />
						<InputHolder>
							<input
								onChange={(e) => {
									setTitle(e.target.value);
								}}
								placeholder="What's happening?"
							/>
							<Hold>
								<Maining>
									<span style={{ color: "#358AC4" }}>
										<input
											onChange={onChangeFile}
											id='pix'
											style={{ display: "none" }}
											type='file'
										/>
										<label style={{ cursor: "pointer" }} htmlFor='pix'>
											<MdInsertPhoto />
										</label>
									</span>
									<span style={{ color: "#358AC4" }}>
										<label style={{ cursor: "pointer" }} htmlFor='pix'>
											<BsFillCameraVideoFill />
										</label>
									</span>
									<span style={{ color: "#358AC4" }}>
										<label style={{ cursor: "pointer" }} htmlFor='pix'>
											<RiFileGifFill />
										</label>
									</span>
								</Maining>
								{user ? (
									<Button onClick={postTweet}>Tweet</Button>
								) : (
									<Button
										onClick={() => {
											Swal.fire({
												icon: "error",
												title: "Cannot tweet, Please create an Account",
											});
										}}>
										Tweet
									</Button>
								)}
							</Hold>
						</InputHolder>
					</SecondComp>
				</Card>
			</div>
		</>
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
const UserImage = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: silver;
	margin-left: 20px;
	object-fit: cover;
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

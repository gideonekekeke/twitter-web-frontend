import React from "react";
import { ImCancelCircle } from "react-icons/im";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { TbCameraPlus } from "react-icons/tb";
import { AiFillSave } from "react-icons/ai";
import axios from "axios";
import LoadingState from "./LoadingState";
import Swal from "sweetalert2";

const EditProfilePage = ({ toggleProf }) => {
	const user = useSelector((state) => state?.persistedReducer?.current);
	const [file1, setFile1] = React.useState("");
	const [file2, setFile2] = React.useState("");
	const [profileImage, setProfileImage] = React.useState("");
	const [coverImage, setCoverImage] = React.useState("");
	const [name, setName] = React.useState();
	const [bio, setBio] = React.useState();

	const [data, setData] = React.useState([]);
	const [load, setLoad] = React.useState(false);

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

	const onChange = (e) => {
		const file = e.target.files[0];
		const fileRef = URL.createObjectURL(file);
		setFile1(fileRef);

		setProfileImage(file);
	};
	const onChangeCover = (e) => {
		const file = e.target.files[0];
		const fileRef = URL.createObjectURL(file);
		setFile2(fileRef);

		setCoverImage(file);
	};

	const onLoad = (fileString) => {
		setProfileImage(fileString);
	};
	const onLoader = (fileString) => {
		setProfileImage(fileString);
	};

	// const EditProfilePage = async () => {
	// 	toggleLoad();
	// 	await axios
	// 		.patch(`http://localhost:18000/api/user/editedProfileImage/${user._id}`, {
	// 			profileImage,
	// 		})
	// 		.then((res) => {
	// 			setLoad(false);
	// 			console.log(res);
	// 		});
	// };

	const EditProfilePage = async () => {
		toggleLoad();
		const formData = new FormData();

		formData.append("profileImage", profileImage);

		const config = {
			"content-type": "multipart/form-data",
		};

		await axios
			.patch(
				`http://localhost:18000/api/user/editedProfileImage/${user._id}`,
				formData,
				config,
			)
			.then((res) => {
				console.log(res.data.data);

				Swal.fire({
					position: "center",
					icon: "success",
					title: "Uploaded successfully",
					showConfirmButton: false,
					timer: 2500,
				});
				setLoad(false);
				window.location.reload();
			})
			.catch((error) => {
				new Swal({
					title: error.response.data.message,
					text: `Please check and fix this ERROR`,
					icon: "error",
					showConfirmButton: false,
					timer: 3500,
				}).then(() => {});

				setLoad(false);
			});
	};
	const EditCoverPage = async () => {
		toggleLoad();
		const formData = new FormData();

		formData.append("coverImage", coverImage);

		const config = {
			"content-type": "multipart/form-data",
		};

		await axios
			.patch(
				`http://localhost:18000/api/user/editedCoverImage/${user._id}`,
				formData,
				config,
			)
			.then((res) => {
				console.log(res.data.data);

				Swal.fire({
					position: "center",
					icon: "success",
					title: "Uploaded successfully",
					showConfirmButton: false,
					timer: 2500,
				});
				setLoad(false);
				window.location.reload();
			})
			.catch((error) => {
				new Swal({
					title: error.response.data.message,
					text: `Please check and fix this ERROR`,
					icon: "error",
					showConfirmButton: false,
					timer: 3500,
				}).then(() => {});

				setLoad(false);
			});
	};
	const EditMainPage = async () => {
		toggleLoad();

		await axios
			.patch(`http://localhost:18000/api/user/editedProfile/${user._id}`, {
				name,
				bio,
			})
			.then((res) => {
				console.log(res.data.data);

				Swal.fire({
					position: "center",
					icon: "success",
					title: "Uploaded successfully",
					showConfirmButton: false,
					timer: 2500,
				});
				setLoad(false);
				window.location.reload();
			})
			.catch((error) => {
				new Swal({
					title: error.response.data.message,
					text: `Please check and fix this ERROR`,
					icon: "error",
					showConfirmButton: false,
					timer: 3500,
				}).then(() => {});

				setLoad(false);
			});
	};

	React.useEffect(() => {
		getUser();
	}, []);

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
				zIndex: "1000",
				transition: "all 350ms",
			}}>
			<Card>
				<Head>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontSize: "20px", cursor: "pointer" }}>
							<ImCancelCircle onClick={toggleProf} />
						</span>
						<h4> Edit Profile</h4>
					</div>
					<Button
						onClick={() => {
							if (file1) {
								EditProfilePage();
							} else if (file2) {
								EditCoverPage();
							} else {
								EditMainPage();
							}
						}}>
						Save
					</Button>
				</Head>
				<CoverImageHold>
					{file2 ? (
						<CoverImage src={file2} />
					) : (
						<CoverImage src={data?.coverImage} />
					)}
					<UploadButton htmlFor='pix'>
						<input
							defaultValue={data?.coverImage}
							onChange={onChangeCover}
							id='pix'
							style={{ display: "none" }}
							type='file'
						/>
						<TbCameraPlus />
					</UploadButton>
				</CoverImageHold>

				<ProfileImageHold>
					{file1 ? (
						<ProfileImage src={file1} />
					) : (
						<ProfileImage src={data?.profileImage} />
					)}
					<UploadButton2 htmlFor='pixe'>
						<input
							defaultValue={data?.coverImage}
							onChange={onChange}
							id='pixe'
							style={{ display: "none" }}
							type='file'
						/>

						<TbCameraPlus />
					</UploadButton2>
				</ProfileImageHold>
				<br />
				<br />
				<br />
				<InputHold>
					<TextHold>
						<span>Name</span>
						<input
							defaultValue={data?.name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							style={{ width: "470px" }}
							placeholder='name'
						/>
					</TextHold>
				</InputHold>
				<InputHold>
					<TextHold>
						<span>Bio</span>
						<input
							defaultValue={data?.bio}
							onChange={(e) => {
								setBio(e.target.value);
							}}
							style={{ width: "470px" }}
							placeholder='Bio'
						/>
					</TextHold>
				</InputHold>
			</Card>

			{load ? <LoadingState /> : null}
		</div>
	);
};

export default EditProfilePage;

const ProfileImageHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProfileImage = styled.img`
	height: 100px;
	width: 100px;
	border-radius: 50%;
	background-color: grey;
	border: 6px solid black;
	position: absolute;
	margin-left: -400px;
	object-fit: cover;
`;
const UploadButton2 = styled.label`
	position: absolute;
	margin-left: -400px;
	font-size: 20px;

	background-color: rgba(0, 0, 0, 0.4);
	height: 40px;
	width: 40px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
const UploadButton = styled.label`
	position: absolute;
	font-size: 20px;

	background-color: rgba(0, 0, 0, 0.4);
	height: 40px;
	width: 40px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
const CoverImage = styled.img`
	height: 170px;
	width: 100%;
	background-color: silver;
	object-fit: cover;
`;
const CoverImageHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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

const InputHold = styled.div`
	display: flex;
	width: 100%;
	/* background-color: red; */
	input {
		height: 50px;
		border-radius: 10px;
		background-color: black;
		border: 1px solid grey;
		outline: none;
		color: white;
		width: 220px;
		margin: 5px;
		padding-left: 10px;
	}
`;
const TextHold = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
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

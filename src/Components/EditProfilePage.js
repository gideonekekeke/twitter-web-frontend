import React from "react";
import { ImCancelCircle } from "react-icons/im";
import styled from "styled-components";

import { TbCameraPlus } from "react-icons/tb";

const EditProfilePage = ({ toggleProf }) => {
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
					<Button>Save</Button>
				</Head>
				<CoverImageHold>
					<CoverImage />
					<UploadButton htmlFor='pix'>
						<input id='pix' style={{ display: "none" }} type='file' />
						<TbCameraPlus />
					</UploadButton>
				</CoverImageHold>

				<ProfileImageHold>
					<ProfileImage />
					<UploadButton2 htmlFor='pixe'>
						<input id='pixe' style={{ display: "none" }} type='file' />
						<TbCameraPlus />
					</UploadButton2>
				</ProfileImageHold>
				<br />
				<br />
				<br />
				<InputHold>
					<TextHold>
						<span>Name</span>
						<input style={{ width: "470px" }} placeholder='name' />
					</TextHold>
				</InputHold>
				<InputHold>
					<TextHold>
						<span>Bio</span>
						<input style={{ width: "470px" }} placeholder='Bio' />
					</TextHold>
				</InputHold>
			</Card>
		</div>
	);
};

export default EditProfilePage;

const ProfileImageHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProfileImage = styled.div`
	height: 100px;
	width: 100px;
	border-radius: 50%;
	background-color: grey;
	border: 6px solid black;
	position: absolute;
	margin-left: -400px;
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
const CoverImage = styled.div`
	height: 170px;
	width: 100%;
	background-color: silver;
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

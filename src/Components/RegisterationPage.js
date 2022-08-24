import React from "react";
import { ImCancelCircle } from "react-icons/im";
import styled from "styled-components";

const RegisterationPage = ({ toggleShow2 }) => {
	const [toggle, setToggle] = React.useState(false);

	const toggleEffect = () => {
		setToggle(!toggle);
	};

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
			{toggle ? (
				<Card>
					<span style={{ fontSize: "20px", cursor: "pointer" }}>
						<ImCancelCircle onClick={toggleShow2} />
					</span>
					<h2>Login Your Account</h2>
					<p>
						{" "}
						This is a fake twitter page, Please Fill in all Details correctly
					</p>

					<InputHold>
						<TextHold>
							<span>Email</span>
							<input
								style={{ width: "470px" }}
								placeholder='Enter your Email'
							/>
						</TextHold>
					</InputHold>
					<InputHold>
						<TextHold>
							<span>Password</span>
							<input
								style={{ width: "470px" }}
								placeholder='Enter your Password'
							/>
						</TextHold>
					</InputHold>

					<Button>Log In</Button>
					<p>
						Don't Have an account?{" "}
						<span
							onClick={toggleEffect}
							style={{ color: "red", cursor: "pointer" }}>
							{" "}
							Register
						</span>
					</p>
				</Card>
			) : (
				<Card>
					<span style={{ fontSize: "20px", cursor: "pointer" }}>
						<ImCancelCircle onClick={toggleShow2} />
					</span>
					<h2>Create Your Account</h2>
					<p>
						{" "}
						This is a fake twitter page, Please Fill in all Details correctly
					</p>

					<InputHold>
						<TextHold>
							<span>FullName</span>
							<input placeholder='Enter your full name' />
						</TextHold>
						<TextHold>
							<span>UserName</span>
							<input placeholder='Enter your username' />
						</TextHold>
					</InputHold>
					<InputHold>
						<TextHold>
							<span>Email</span>
							<input
								style={{ width: "470px" }}
								placeholder='Enter your Email'
							/>
						</TextHold>
					</InputHold>
					<InputHold>
						<TextHold>
							<span>Password</span>
							<input
								style={{ width: "470px" }}
								placeholder='Enter your Password'
							/>
						</TextHold>
					</InputHold>

					<Button>Register</Button>
					<p>
						Already Have an account?{" "}
						<span
							onClick={toggleEffect}
							style={{ color: "red", cursor: "pointer" }}>
							{" "}
							Login
						</span>
					</p>
				</Card>
			)}
		</div>
	);
};

export default RegisterationPage;

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

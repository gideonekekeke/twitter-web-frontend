import React from "react";
import { ImCancelCircle } from "react-icons/im";
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import MoonLoader from "react-spinners/MoonLoader";

import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const SignInScreen = ({ toggleShow2 }) => {
	// const [toggle, setToggle] = React.useState(false);

	// const toggleEffect = () => {
	// 	setToggle(!toggle);
	// };

	const schema = yup.object().shape({
		email: yup.string().required("this field is required"),
		password: yup.string().required("this field is required"),
	});

	const {
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
		register,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const LoginUser = handleSubmit(async (val) => {
		console.log(val);

		await axios
			.post("http://localhost:18000/api/user/login", val)
			.then((res) => {
				console.log(res);
				Swal.fire({
					icon: "success",
					title: "Welcome Back",
				});
				reset();
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "An error occurred",
				});
			});
	});

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
			<Card
				onSubmit={(e) => {
					e.preventDefault();
					LoginUser();
				}}>
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
							{...register("email")}
							style={{ width: "470px" }}
							placeholder='Enter your Email'
						/>
					</TextHold>
				</InputHold>
				<InputHold>
					<TextHold>
						<span>Password</span>
						<input
							{...register("password")}
							style={{ width: "470px" }}
							placeholder='Enter your Password'
						/>
					</TextHold>
				</InputHold>
				{isSubmitting ? (
					<MoonLoader size={20} color='#fff' />
				) : (
					<Button type='submit'>Log In</Button>
				)}
				<p>
					Don't Have an account?{" "}
					<Link style={{ textDecoration: "none", color: "red" }} to='/register'>
						<span
							onClick={toggleEffect}
							style={{ color: "red", cursor: "pointer" }}>
							{" "}
							Register
						</span>
					</Link>
				</p>
			</Card>
		</div>
	);
};

export default SignInScreen;

const Button = styled.button`
	margin: 10px;
	width: 150px;
	background-color: #1a8cd8;
	color: white;
	padding: 20px 30px;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	transition: all 350ms;
	:hover {
		transform: scale(0.96);
	}

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

const Card = styled.form`
	/* height: 200px; */
	width: 500px;
	background-color: black;
	margin-top: 20px;
	border-radius: 10px;
	padding: 20px;
	transition: all 350ms;
`;

import React from "react";
import { ImCancelCircle } from "react-icons/im";
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import MoonLoader from "react-spinners/MoonLoader";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { user } from "./Global/actions";
const RegisterationPage = ({ toggleShow2 }) => {
	const [toggle, setToggle] = React.useState(false);
	const dispatch = useDispatch();

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [load, setLoad] = React.useState(false);

	const toggleEffect = () => {
		setToggle(!toggle);
	};

	const ToggleLoad = () => {
		setLoad(true);
	};

	const schema = yup.object().shape({
		name: yup.string().required("this field is required"),
		username: yup.string().required("this field is required"),
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

	const RegisterUser = handleSubmit(async (val) => {
		console.log(val);

		await axios
			.post("http://localhost:18000/api/user/register", val)
			.then((res) => {
				console.log(res.data.data);
				dispatch(user(res.data.data));
				reset();
				Swal.fire({
					icon: "success",
					title: "Account created Successfully",
					showConfirmButton: false,
				});
				window.location.reload();
			})
			.catch((err) => {
				console.log("errror ooooooo");
				Swal.fire({
					icon: "error",
					title: "An error occurred",
				});
			});
	});
	const LoginUser = async () => {
		ToggleLoad();
		await axios
			.post("http://localhost:18000/api/user/login", { email, password })
			.then((res) => {
				console.log(res.data.data);
				Swal.fire({
					icon: "success",
					title: "Welcome Back",
					showConfirmButton: false,
				});
				window.location.reload();

				dispatch(user(res.data.data));

				setLoad(false);
				reset();
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "An error occurred",
				});
			});
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
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								style={{ width: "470px" }}
								placeholder='Enter your Email'
							/>
						</TextHold>
					</InputHold>
					<InputHold>
						<TextHold>
							<span>Password</span>
							<input
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								style={{ width: "470px" }}
								placeholder='Enter your Password'
							/>
						</TextHold>
					</InputHold>
					{load ? (
						<MoonLoader size={20} color='#fff' />
					) : (
						<Button type='submit'>Log In</Button>
					)}
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
				<Card
					onSubmit={(e) => {
						e.preventDefault();
						RegisterUser();
					}}>
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
							<input {...register("name")} placeholder='Enter your full name' />
						</TextHold>
						<TextHold>
							<span>UserName</span>
							<input
								{...register("username")}
								placeholder='Enter your username'
							/>
						</TextHold>
					</InputHold>
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
						<Button type='submit'>Register</Button>
					)}
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

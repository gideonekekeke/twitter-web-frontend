import React from "react";
import { ImCancelCircle } from "react-icons/im";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { TbCameraPlus } from "react-icons/tb";
import { AiFillSave } from "react-icons/ai";
import axios from "axios";
import LoadingState from "./LoadingState";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UnFollowerPage from "./UnFollowerPage";
import UserDetails from "./UserDetails";

const FollowingList = ({ toggleFollowing }) => {
	const user = useSelector((state) => state?.persistedReducer?.current);
	const [showUn, setShowUn] = React.useState(false);

	const toggleUnfollow = () => {
		setShowUn(!showUn);
	};

	const [data, setData] = React.useState([]);

	const getUser = async () => {
		await axios
			.get(`http://localhost:18000/api/user/${user._id}`)
			.then((res) => {
				console.log("this is rhe user", res);
				setData(res.data.data);
			});
	};

	React.useEffect(() => {
		getUser();
	}, []);

	return (
		<>
			{showUn ? <UnFollowerPage toggleUnfollow={toggleUnfollow} /> : null}
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
								<ImCancelCircle onClick={toggleFollowing} />
							</span>
							<h4> Following</h4>
						</div>
					</Head>
					{data?.following?.map((props) => (
						<Hold>
							<UserDetails id={props.userFollow} />
							<Button
								onClick={() => {
									toggleUnfollow();
									// toggleFollowing();
								}}>
								Following
							</Button>
						</Hold>
					))}
				</Card>
			</div>
		</>
	);
};

export default FollowingList;

const Hold = styled.div`
	display: flex;
	justify-content: space-between;
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

const Card = styled.div`
	/* height: 200px; */
	width: 500px;
	background-color: black;
	margin-top: 20px;
	border-radius: 10px;
	padding: 20px;
	transition: all 350ms;
`;

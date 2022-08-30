import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserDetails = ({ id, ima }) => {
	const [data, setData] = React.useState([]);

	const getUser = async () => {
		await axios.get(`http://localhost:18000/api/user/${id}`).then((res) => {
			console.log("this is rhe user", res);
			setData(res.data.data);
		});
	};

	React.useEffect(() => {
		getUser();
	}, [data]);
	return (
		<>
			{" "}
			<div style={{ display: "flex" }}>
				<ProfileImage src={data?.profileImage} />
				<TextHold to={`/profile/${data?._id}`}>
					<Text>{data.name}</Text>
					<span style={{ color: "grey" }}>@{data.username}</span>
				</TextHold>
			</div>
		</>
	);
};

export default UserDetails;
const TextHold = styled(Link)`
	margin-left: 10px;
	text-decoration: none;
`;
const Text = styled.div`
	color: white;
`;

const ProfileImage = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: grey;

	object-fit: cover;
`;

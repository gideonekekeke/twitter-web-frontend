import React from "react";
import { FcLike } from "react-icons/fc";
import { AiFillHome, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import axios from "axios";
const LikeComp = ({ data, id }) => {
	const user = useSelector((state) => state?.persistedReducer?.current);

	const createLike = async () => {
		await axios
			.post(`http://localhost:18000/api/liking/like/${user._id}/${id}`)
			.then(() => {
				// window.location.reload();
			});
	};

	const createUnLike = async () => {
		await axios
			.post(`http://localhost:18000/api/liking/unlike/${user._id}/${id}`)
			.then(() => {
				// window.location.reload();
			});
	};

	React.useEffect(() => {
		console.log("checking", data?.like?.includes(user?._id));
	}, []);

	return (
		<div>
			{data?.like?.includes(user?._id) ? (
				<span
					onClick={createUnLike}
					style={{
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
						color: "red",
					}}>
					{" "}
					<AiFillHeart style={{ cursor: "pointer" }} />
				</span>
			) : (
				<span
					onClick={createLike}
					style={{
						display: "flex",
						alignItems: "center",

						cursor: "pointer",
					}}>
					{" "}
					<AiOutlineHeart style={{ cursor: "pointer" }} />
				</span>
			)}
		</div>
	);
};

export default LikeComp;

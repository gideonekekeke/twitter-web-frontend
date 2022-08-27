import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
const LoadingState = () => {
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
			<MoonLoader color='#fff' />
		</div>
	);
};

export default LoadingState;

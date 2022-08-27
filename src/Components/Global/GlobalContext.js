import React, { createContext } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export const GlobalContext = createContext();

export const AuthProvide = ({ children }) => {
	const [current, setCurrent] = React.useState(null);

	// const user = useSelector((state) => state?.persistedReducer?.current);
	// React.useEffect(() => {
	// 	setCurrent(user);
	// 	console.log("this is the current", current);

	// }, []);

	return (
		<GlobalContext.Provider
			value={{
				current,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};

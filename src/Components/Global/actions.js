import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	current: null,
};

const actions = createSlice({
	name: "twitter",
	initialState,
	reducers: {
		user: (state, { payload }) => {
			state.current = payload;
		},
		signOut: (state) => {
			state.current = null;
		},
	},
});

export const {
	user,
	signOut,
	searching,
	getServiceId,
	shootFriend,
	allUsers,
	otherUsers,
	sendingUser,
	clearSearch,
	sendBookID,
	createStepID,
} = actions.actions;
export default actions.reducer;

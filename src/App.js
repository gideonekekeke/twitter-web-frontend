import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComponentHold from "./Components/ComponentHold";
import LastComponents from "./Components/LastComponents";
import SideBarComp from "./Components/SideBarComp";
import styled from "styled-components";
import ExplorePage from "./Components/ExplorePage";
import NotificationPage from "./Components/NotificationPage";
import Messages from "./Components/Messages";
import BookMarks from "./Components/BookMarks";
function App() {
	return (
		<Container>
			<Router>
				<SideBarComp />
				<Routes>
					<Route path='/' element={<ComponentHold />} />
					<Route path='/explore' element={<ExplorePage />} />
					<Route path='/notifications' element={<NotificationPage />} />
					<Route path='/messages' element={<Messages />} />
					<Route path='/bookmarks' element={<BookMarks />} />
				</Routes>
				<LastComponents />
			</Router>
		</Container>
	);
}

export default App;

const Container = styled.div`
	display: grid;

	grid-template-columns: 1fr 2fr 1fr;

	@media screen and (max-width: 768px) {
	}
`;

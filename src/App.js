import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/routes/sign-in/sign-in.component";

const Shop = () => {
	return (
		<div>
			<h1>THIS IS THE SHOP PAGE</h1>
		</div>
	);
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/signin" element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;

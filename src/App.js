import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/auth/auth.component";

// ---------------------------------------------------------------------

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
				<Route path="/auth" element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;

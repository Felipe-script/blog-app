import React from "react";
import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components";
import { Home, Login, CreatePost } from "@/pages";
import { PrivateRoute } from "./routes";
// import logo from './logo.svg'
// import "./App.css";

const App: React.FC = (): React.ReactElement => {
	return (
		<div>
			<NavBar />
			<Routes>
				{/* public routes */}
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />

				{/* private routes */}
				<Route path="/create-post" element={<PrivateRoute component={CreatePost} />} />
			</Routes>
		</div>
	);
};

export default App;

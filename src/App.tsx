import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { NavBar } from "@/components";
import { Home, MyAccount, Mybookmarks, Drafts, Post } from "@/pages";
import { PrivateRoute } from "./routes";
import { PUBLIC_PATHS, PRIVATE_PATHS } from "@/enums/routes";

const App: React.FC = (): React.ReactElement => {
	return (
		<>
			<NavBar />
			<Routes>
				{/* public routes */}
				<Route path={PUBLIC_PATHS.HOME} element={<Home />}/>

				{/* private routes */}
				<Route path={PRIVATE_PATHS.POSTS} element={<Navigate replace to={PUBLIC_PATHS.HOME} />}/>
				<Route path={PRIVATE_PATHS.POST} element={<PrivateRoute component={Post} />} />
				<Route
					path={PRIVATE_PATHS.MY_ACCOUNT}
					element={<PrivateRoute component={MyAccount} />}
				/>
				<Route
					path={PRIVATE_PATHS.MY_BOOKMARKS}
					element={<PrivateRoute component={Mybookmarks} />}
				/>
				<Route
					path={PRIVATE_PATHS.DRAFTS}
					element={<PrivateRoute component={Drafts} />}
				/>
			</Routes>
		</>
	);
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import { NavBar } from "@/components";
import { Home, MyAccount, Mybookmarks, Drafts } from "@/pages";
import { PrivateRoute } from "./routes";
import { PUBLIC_PATHS, PRIVATE_PATHS } from '@/enums/routes';

const App: React.FC = (): React.ReactElement => {
	return (
		<div>
			<NavBar />
			<Routes>
				{/* public routes */}
				<Route path={PUBLIC_PATHS.HOME} element={<Home />} />

				{/* private routes */}
				<Route path={PRIVATE_PATHS.MY_ACCOUNT} element={<PrivateRoute component={MyAccount} />} />
				<Route path={PRIVATE_PATHS.MY_BOOKMARKS} element={<PrivateRoute component={Mybookmarks} />} />
				<Route path={PRIVATE_PATHS.DRAFTS} element={<PrivateRoute component={Drafts} />} />
			</Routes>
		</div>
	);
};

export default App;

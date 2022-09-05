import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { PUBLIC_PATHS, PRIVATE_PATHS } from '@/enums/routes';
import logo from "@/assets/logo.png";
import * as S from "./styles";

const NavBar: React.FC = (): React.ReactElement => {
	const navigate = useNavigate();
	const { isAuthenticated, isLoading, loginWithPopup, logout } = useAuth0();

	const handleAuth = useCallback((): void => {
		if (isAuthenticated) return logout();
		loginWithPopup();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<S.NavContainer>
			<S.Logo src={logo} onClick={() => navigate(PUBLIC_PATHS.HOME)} />
			<S.UnorderedList>
				<S.Item onClick={() => navigate(PRIVATE_PATHS.MY_BOOKMARKS)}>My bookmarks</S.Item>
				<S.Item onClick={() => navigate(PRIVATE_PATHS.DRAFTS)}>Drafts</S.Item>
				<S.Item onClick={() => navigate(PRIVATE_PATHS.MY_ACCOUNT)}>My Account</S.Item>
				<S.Item auth onClick={handleAuth}>
					{isAuthenticated ? "Logout" : "Sign in"}
				</S.Item>
			</S.UnorderedList>
		</S.NavContainer>
	);
};

export default NavBar;

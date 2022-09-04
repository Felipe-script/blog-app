import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
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
			<S.Logo src={logo} onClick={() => navigate("/")} />
			<S.UnorderedList>
				<S.Item onClick={() => navigate("/")}>Home</S.Item>
				<S.Item>My bookmarks</S.Item>
				<S.Item>Drafts</S.Item>
				<S.Item>My Account</S.Item>
				<S.Item auth onClick={handleAuth}>
					{isAuthenticated ? "Logout" : "Sign in"}
				</S.Item>
			</S.UnorderedList>
			{/* {isAuthenticated ? <LogoutButton /> : <LoginButton />}
			<span onClick={() => navigate("/create-post")}>Create Post</span> */}
		</S.NavContainer>
	);
};

export default NavBar;

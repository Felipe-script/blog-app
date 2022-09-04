import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider, AppState } from "@auth0/auth0-react";

type AuthProviderProps = {
	children: React.ReactNode;
};

const AuthProviderWithHistory: React.FC<AuthProviderProps> = ({
	children,
}: AuthProviderProps) => {
	const navigate = useNavigate();
	const domain: string = process.env.REACT_APP_AUTH0_DOMAIN || "";
	const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || "";

	const onRedirectCallback = useCallback((appState?: AppState) => {
		navigate(appState?.returnTo || window.location.pathname);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			redirectUri={window.location.origin}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
};

export default AuthProviderWithHistory;

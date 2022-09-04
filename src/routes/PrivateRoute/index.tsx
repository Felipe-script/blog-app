import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

type PrivateRouteProps = {
	component: React.FC
}

const Loading = () => {
  return <p>Loading...</p>;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
	component,
}): React.ReactElement => {
  const Component = withAuthenticationRequired(component  , {
    onRedirecting: () => <Loading />,
  });
  return <Component/>;
};

export default PrivateRoute;
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton: React.FC = () => {
  const { logout } = useAuth0();
  return (
    <>
      <button onClick={(): void => logout()}>Logout</button>
      <br />
    </>
  );
};

export default LoginButton;
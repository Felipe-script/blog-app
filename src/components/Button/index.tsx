import React, { CSSProperties } from "react";

import * as S from "./styles";

type ButtonProps = {
	label: string;
	onClick?: () => void;
	style?: CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, style }): React.ReactElement => {
	return <S.Button onClick={onClick} style={{...style}}>{label}</S.Button>;
};

export default Button;

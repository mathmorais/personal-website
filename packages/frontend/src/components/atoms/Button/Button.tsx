import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./Button.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

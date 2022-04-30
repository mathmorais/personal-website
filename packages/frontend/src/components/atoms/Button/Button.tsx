import { ButtonHTMLAttributes } from "react";
import { ButtonContainer, ButtonStyleProps } from "./Button.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	ButtonStyleProps & {};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

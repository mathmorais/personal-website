import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { AnchorContainer } from "./Anchor.styles";

type Navigation = {
	label?: string | React.FunctionComponent;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor: React.FC<Navigation> = ({ label, children, ...props }) => {
	return (
		<Link passHref href={props.href ?? "#"}>
			<AnchorContainer {...props}>{label ?? children}</AnchorContainer>
		</Link>
	);
};

import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { AnchorContainer } from "./Anchor.styles";

type Navigation = {
	navigateTo?: string;
	redirectTo?: string;
	label?: string | React.FunctionComponent;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export const Anchor: React.FC<Navigation> = ({ label, children, ...props }) => {
	return (
		<Link passHref href={props.navigateTo ?? ""}>
			<AnchorContainer {...props}>{label ?? children}</AnchorContainer>
		</Link>
	);
};

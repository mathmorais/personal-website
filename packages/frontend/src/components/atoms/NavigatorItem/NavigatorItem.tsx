import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { NavigatorItemContainer } from "./NavigatorItem.styles";

type Navigation = {
	navigateTo?: string;
	redirectTo?: string;
	label?: string | React.FunctionComponent;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export const NavigatorItem: React.FC<Navigation> = ({
	label,
	children,
	...props
}) => {
	return (
		<Link passHref href={props.navigateTo ?? ""}>
			<NavigatorItemContainer {...props}>
				{label ?? children}
			</NavigatorItemContainer>
		</Link>
	);
};

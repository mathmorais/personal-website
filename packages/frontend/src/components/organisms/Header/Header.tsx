import { useCallback } from "react";
import { Typography } from "../../atoms/Typography/Typography";
import { HeaderContainer } from "./Header.styles";

type HeaderNavigation = {
	label: string;
	redirectTo: string;
};

type HeaderProps = {
	logo: string;
	navigations: HeaderNavigation[];
};

export const Header: React.FC<HeaderProps> = ({ logo, navigations }) => {
	const serializeNavigations = useCallback(
		(navigations: HeaderNavigation[]) => {
			navigations.map((navigation) => {
				return <Typography size="Medium">{navigation.label}</Typography>;
			});
		},
		[navigations]
	);

	return (
		<HeaderContainer scrolled={true}>
			<Typography size="Large">{logo}</Typography>
			{serializeNavigations(navigations)}
		</HeaderContainer>
	);
};

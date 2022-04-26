import React, { ComponentPropsWithoutRef } from "react";

import { Navigator } from "components/molecules/Navigator/Navigator";
import { Typography } from "../../atoms/Typography/Typography";
import { HeaderContainer, HeaderContent } from "./Header.styles";

type HeaderProps = {
	logo: string;
	navigations: ComponentPropsWithoutRef<typeof Navigator>["navigations"];
	scrolled?: boolean;
};

export const Header: React.FC<HeaderProps> = ({
	logo,
	navigations,
	scrolled,
}) => {
	return (
		<HeaderContainer scrolled={scrolled}>
			<HeaderContent>
				<Typography size="Large">{logo}</Typography>
				<Navigator navigations={navigations} />
			</HeaderContent>
		</HeaderContainer>
	);
};

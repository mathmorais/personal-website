import React, { ComponentPropsWithoutRef } from "react";
import { Typography } from "~/components/atoms/Typography/Typography";
import { Navigator } from "~/components/molecules/Navigator/Navigator";

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

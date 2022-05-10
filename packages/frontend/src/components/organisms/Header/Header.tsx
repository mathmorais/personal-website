import React, { ComponentPropsWithoutRef, useState } from "react";
import { Typography } from "~/components/atoms/Typography/Typography";
import { Navigation } from "~/components/molecules/Navigation/Navigation";
import { EffectCallback, useScrollPosition } from "~/hooks/useScrollPosition";

import { HeaderContainer, HeaderContent } from "./Header.styles";

type HeaderProps = {
	logo: string;
	navigations: ComponentPropsWithoutRef<typeof Navigation>["navigations"];
	scrolled?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ logo, navigations }) => {
	const [hasScrolled, setHasScrolled] = useState<boolean>(false);
	const { scrollPositionHandler } = useScrollPosition();

	const onScroll: EffectCallback = ({ currPos }) => {
		const SCROLL_OFFSET = 100;
		return setHasScrolled(currPos.y > SCROLL_OFFSET);
	};

	scrollPositionHandler({
		effect: onScroll,
		useWindow: true,
		deps: [hasScrolled],
	});

	return (
		<HeaderContainer scrolled={hasScrolled}>
			<HeaderContent>
				<Typography size="Large">{logo}</Typography>
				<Navigation navigations={navigations} />
			</HeaderContent>
		</HeaderContainer>
	);
};

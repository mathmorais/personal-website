import type { NextPage } from "next";
import { useState } from "react";
import { Header } from "../components/organisms/Header/Header";
import { HomePageSkeleton } from "../components/templates/HomePageSkeleton/HomePageSkeleton";
import { EffectCallback, useScrollPosition } from "../hooks/useScrollPosition";
import { Typography } from "components/atoms/Typography/Typography";

import GithubIcon from "../assets/Github.svg";
import LinkedinSvg from "../assets/Linkedin.svg";
import { Presentation } from "components/molecules/Presentation/Presentation";

const Home: NextPage = () => {
	const [hasScrolled, setHasScrolled] = useState<boolean>(false);
	const { scrollPositionHandler } = useScrollPosition();

	const onScroll: EffectCallback = ({ currPos }) =>
		setHasScrolled(currPos.y > 0);

	scrollPositionHandler({
		effect: onScroll,
		useWindow: true,
		deps: [],
	});

	return (
		<HomePageSkeleton
			header={
				<Header
					scrolled={hasScrolled}
					logo="mathmorais.dev"
					navigations={[
						{
							label: GithubIcon,
							navigateTo: "https://www.github.com/mathmorais",
						},
						{
							label: LinkedinSvg,
							navigateTo: "https://www.linkedin.com/in/mathmorais/",
						},
					]}
				/>
			}
		>
			<Presentation />
		</HomePageSkeleton>
	);
};

export default Home;

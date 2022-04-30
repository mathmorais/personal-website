import type { NextPage } from "next";
import { Header } from "../components/organisms/Header/Header";
import { HomePageSkeleton } from "../components/templates/HomePageSkeleton/HomePageSkeleton";

import GithubIcon from "../assets/Github.svg";
import LinkedinSvg from "../assets/Linkedin.svg";
import { Presentation } from "components/molecules/Presentation/Presentation";
import { Section } from "~/components/organisms/Section/Section";
import { ProjectsGrid } from "~/components/organisms/ProjectsGrid/ProjectsGrid";
import { ProjectCard } from "~/components/molecules/ProjectCard/ProjectCard";
import { SectionWrapper } from "~/components/organisms/SectionWrapper/SectionWrapper";
import { SectionSelector } from "~/components/molecules/SectionSelector/SectionSelector";

import { TabSelector } from "~/components/organisms/TabSelector/TabSelector";
import { ITab } from "~/interfaces/components/ITab";
import { Typography } from "~/components/atoms/Typography/Typography";

const Home: NextPage = () => {
	const presentationText =
		"👋 Hi! I'm Matheus Morais, <br> <strong>Frontend Developer</strong> at <a href='https://cidadealta.gg'>Cidade Alta</a>";

	const tabs: ITab[] = [
		{
			title: "About me",
			content: (
				<Typography size="Small">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non qui
					eligendi provident nesciunt labore nam totam fugiat rerum atque
					aspernatur recusandae dolore veniam, perspiciatis animi quos. Dolor
					fuga consequatur voluptas!
				</Typography>
			),
		},
		{
			title: "Experiences",
			content: (
				<Typography size="Small">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non qui
				</Typography>
			),
		},
		{
			title: "Skills",
			content: (
				<Typography size="Small">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non qui
					eligendi provident nesciunt labore nam totam fugiat rerum atque
					aspernatur recusandae dolore veniam, perspiciatis animi quos. Dolor
					fuga consequatur voluptas! Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Non qui eligendi provident nesciunt labore nam totam
					fugiat rerum atque aspernatur recusandae dolore veniam, perspiciatis
					animi quos. Dolor fuga consequatur voluptas! Lorem, ipsum dolor sit
					amet consectetur adipisicing elit. Non qui eligendi provident nesciunt
					labore nam totam fugiat rerum atque aspernatur recusandae dolore
					veniam, perspiciatis animi quos. Dolor fuga consequatur voluptas!
				</Typography>
			),
		},
	];

	const sections = [
		<Section fillScreen>
			<Presentation presentationText={presentationText} />
		</Section>,
		<Section fillScreen title="About me" withBackground>
			<TabSelector tabs={tabs} />
		</Section>,
		<Section spacing={8} title="Projects" withBackground>
			<ProjectsGrid>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</ProjectsGrid>
		</Section>,
	];

	return (
		<HomePageSkeleton
			header={
				<Header
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
			<SectionWrapper>
				<SectionSelector sectionCount={sections.length} />
				{sections}
			</SectionWrapper>
		</HomePageSkeleton>
	);
};

export default Home;

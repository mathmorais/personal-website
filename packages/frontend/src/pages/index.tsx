import type { GetStaticProps, NextPage } from "next";
import { Header } from "../components/organisms/Header/Header";
import { HomePageSkeleton } from "../components/templates/HomePageSkeleton/HomePageSkeleton";

import GithubIcon from "../assets/Github.svg";
import LinkedinSvg from "../assets/Linkedin.svg";
import { Presentation } from "components/molecules/Presentation/Presentation";
import { Section } from "~/components/organisms/Section/Section";
import { ProjectsGrid } from "~/components/organisms/ProjectsGrid/ProjectsGrid";
import { SectionWrapper } from "~/components/organisms/SectionWrapper/SectionWrapper";
import { SectionSelector } from "~/components/molecules/SectionSelector/SectionSelector";

import { TabSelector } from "~/components/organisms/TabSelector/TabSelector";
import { ModalContextProvider } from "~/contexts/ModalContext";
import { ProjectViewModal } from "~/components/molecules/Modal/variations/ProjectView/ProjectView";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ITab } from "~/interfaces/components/ITab";
import { useMemo } from "react";
import { ExperienciesList } from "~/components/organisms/ExperienciesList/ExperienciesList";

const Home: NextPage = () => {
	const { t } = useTranslation(["common", "projects", "experiences", "skills"]);

	const tabs: ITab[] = [
		{
			title: t("experiences:title"),
			content: (
				<ExperienciesList
					experiencies={t("experiences:content", { returnObjects: true })}
				/>
			),
		},
	];

	const sections = [
		<Section fillScreen>
			<Presentation presentationText={t("presentation")} />
		</Section>,
		<Section fillScreen title="About me" withBackground>
			<TabSelector tabs={tabs} />
		</Section>,
		<Section spacing={15} title={"projects.title"} withBackground>
			<ProjectsGrid projects={[]} />
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
							href: "https://www.github.com/mathmorais",
						},
						{
							label: LinkedinSvg,
							href: "https://www.linkedin.com/in/mathmorais/",
						},
					]}
				/>
			}
		>
			<ModalContextProvider>
				<ProjectViewModal />
				<SectionWrapper>
					<SectionSelector sectionCount={sections.length} />
				</SectionWrapper>
				{sections}
			</ModalContextProvider>
		</HomePageSkeleton>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", [
			"common",
			"projects",
			"experiences",
			"skills",
		])),
	},
});

export default Home;

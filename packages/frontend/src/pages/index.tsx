import type { GetStaticProps, NextPage } from "next";
import { Header } from "../components/organisms/Header/Header";
import { HomePageSkeleton } from "../components/templates/HomePageSkeleton/HomePageSkeleton";

import GithubIcon from "../assets/svgs/Github.svg";
import LinkedinSvg from "../assets/svgs/Linkedin.svg";
import { SectionSelector } from "~/components/molecules/SectionSelector/SectionSelector";

import { ModalContextProvider } from "~/contexts/ModalContext";
import { ProjectViewModal } from "~/components/molecules/Modal/variations/ProjectView/ProjectView";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useHomeSections } from "~/hooks/useHomeSections";
import { SectionWrapper } from "~/components/molecules/SectionWrapper/SectionWrapper";
import { SectionList } from "~/components/organisms/SectionList/SectionList";
import Head from "next/head";

const Home: NextPage = () => {
	const { sections } = useHomeSections();

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
			<Head>
				<title>Matheus Morais</title>
			</Head>
			<ModalContextProvider>
				<ProjectViewModal />
				<SectionWrapper>
					{/* <SectionSelector sections={sections} /> */}
				</SectionWrapper>
				<SectionList sections={sections} />
			</ModalContextProvider>
		</HomePageSkeleton>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en")),
	},
});

export default Home;

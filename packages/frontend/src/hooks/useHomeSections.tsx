import { useTranslation } from "next-i18next";
import { Presentation } from "~/components/molecules/Presentation/Presentation";
import { ProjectsGrid } from "~/components/organisms/ProjectsGrid/ProjectsGrid";
import { Section } from "~/components/molecules/Section/Section";
import { SkillsList } from "~/components/organisms/SkillsList/SkillsList";
import { TabSelector } from "~/components/organisms/TabSelector/TabSelector";
import { useHomeTabs } from "./useHomeTabs";
import { ISection } from "~/interfaces/components/ISection";

export const useHomeSections = () => {
	const { t } = useTranslation(["common", "about", "skills", "projects"]);
	const { tabs } = useHomeTabs();

	const sections: ISection[] = [
		{
			name: "presentation",
			content: <Presentation presentationText={t("presentation")} />,
			options: {
				withoutBackground: true,
			},
		},
		{
			title: t("about:title"),
			name: "about",
			content: <TabSelector tabs={tabs} />,
		},
		{
			title: t("skills:title"),
			name: "skills",
			description: t("skills:description"),
			content: (
				<SkillsList skills={t("skills:content", { returnObjects: true })} />
			),
			options: {
				fillScreen: true,
			},
		},
		{
			title: t("projects:title"),
			name: "projects",
			content: (
				<ProjectsGrid
					projects={t("projects:content", { returnObjects: true })}
				/>
			),
		},
	];

	return { sections };
};

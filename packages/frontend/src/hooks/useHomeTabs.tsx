import { useTranslation } from "next-i18next";
import { ExperienciesList } from "~/components/organisms/ExperienciesList/ExperienciesList";
import { SkillsList } from "~/components/organisms/SkillsList/SkillsList";
import { ITab } from "~/interfaces/components/ITab";

export const useHomeTabs = () => {
	const { t } = useTranslation(["about", "skills", "tools", "experiences"]);

	const tabs: ITab[] = [
		{
			title: t("experiences:title"),
			content: (
				<ExperienciesList
					experiencies={t("experiences:content", { returnObjects: true })}
				/>
			),
		},
		{
			title: t("skills:title"),
			content: (
				<SkillsList skills={t("skills:content", { returnObjects: true })} />
			),
		},
		{
			title: t("tools:title"),
			content: (
				<SkillsList skills={t("tools:content", { returnObjects: true })} />
			),
		},
	];

	return { tabs };
};

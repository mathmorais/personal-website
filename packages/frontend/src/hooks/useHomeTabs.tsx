import { useTranslation } from "next-i18next";
import { ExperienciesList } from "~/components/organisms/ExperienciesList/ExperienciesList";
import { ITab } from "~/interfaces/components/ITab";

export const useHomeTabs = () => {
	const { t } = useTranslation(["about", "experiences"]);

	const tabs: ITab[] = [
		{
			title: t("about:title"),
			content: t("about:content"),
		},
		{
			title: t("experiences:title"),
			content: (
				<ExperienciesList
					experiencies={t("experiences:content", { returnObjects: true })}
				/>
			),
		},
	];

	return { tabs };
};

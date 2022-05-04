import { useMemo } from "react";
import { ExperienciesItem } from "~/components/molecules/ExperienciesItem/ExperienciesItem";
import { IExperience } from "~/interfaces/components/IExperience";
import { ExperienciesListContainer } from "./ExperienciesList.styles";

type ExperienciesListProps = {
	experiencies: IExperience[];
};

export const ExperienciesList: React.FC<ExperienciesListProps> = ({
	experiencies,
}) => {
	const serializedExperiencies = useMemo(() => {
		return experiencies.map((experience, index) => (
			<ExperienciesItem experience={experience} key={index} />
		));
	}, [experiencies]);

	return (
		<ExperienciesListContainer>
			{serializedExperiencies}
		</ExperienciesListContainer>
	);
};

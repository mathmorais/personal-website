import { IExperience } from "~/interfaces/components/IExperience";
import { ExperienciesItemContainer } from "./ExperienciesItem.styles";

type ExperiencisItemProps = {
	experience: IExperience;
};

export const ExperienciesItem: React.FC<ExperiencisItemProps> = ({
	experience: { company, location, startDate, endDate, title, description },
}) => {
	return (
		<ExperienciesItemContainer>
			<h1>{company}</h1>
			<h2>{location}</h2>
		</ExperienciesItemContainer>
	);
};

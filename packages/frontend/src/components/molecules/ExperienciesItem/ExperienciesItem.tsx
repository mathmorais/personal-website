import { Typography } from "~/components/atoms/Typography/Typography";
import { IExperience } from "~/interfaces/components/IExperience";
import {
	ExperienciesItemContainer,
	ExperienciesItemDate,
} from "./ExperienciesItem.styles";

type ExperiencisItemProps = {
	experience: IExperience;
};

export const ExperienciesItem: React.FC<ExperiencisItemProps> = ({
	experience: { company, location, startDate, endDate, title, description },
}) => {
	return (
		<ExperienciesItemContainer>
			<Typography>{company}</Typography>
			<Typography>{location}</Typography>
			<ExperienciesItemDate>
				<Typography>{startDate}</Typography>
				<Typography>-</Typography>
				<Typography>{endDate}</Typography>
			</ExperienciesItemDate>
		</ExperienciesItemContainer>
	);
};

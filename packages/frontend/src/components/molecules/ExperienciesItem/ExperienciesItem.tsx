import { TextArea } from "~/components/atoms/TextArea/TextArea";
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
			<Typography>
				{title} - {location}
			</Typography>
			<ExperienciesItemDate>
				<Typography>{startDate}</Typography>
				<Typography>-</Typography>
				<Typography>{endDate}</Typography>
			</ExperienciesItemDate>
			<TextArea readOnly>{description}</TextArea>
		</ExperienciesItemContainer>
	);
};

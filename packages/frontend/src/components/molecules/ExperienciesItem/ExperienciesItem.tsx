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
			<Typography size="Small" weight={500}>
				{description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Aperiam nisi alias pariatur omnis? Exercitationem, qui magni
				repudiandae, blanditiis totam harum nihil laudantium adipisci modi,
				reprehenderit cum. Omnis illo quidem quis.
			</Typography>
		</ExperienciesItemContainer>
	);
};

import Image from "next/image";
import {
	ProjectCardContainer,
	ProjectCardContent,
	ProjectCardRow,
} from "./ProjectCard.styles";
import fastWeather from "~/../public/fastWeather.png";
import { Typography } from "~/components/atoms/Typography/Typography";
import { Tag } from "~/components/atoms/Tag/Tag";
import { Button } from "~/components/atoms/Button/Button";

export const ProjectCard = () => {
	return (
		<ProjectCardContainer>
			<Image
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				src={fastWeather}
				placeholder="blur"
			/>
			<ProjectCardContent>
				<Typography size="Medium">Cidade Alta Challenge Dashboard</Typography>
				<Tag>React.js</Tag>
				<ProjectCardRow>
					<Button centralized>
						<Typography size="Small">Demo</Typography>
					</Button>
					<Button centralized>
						<Typography size="Small">Deploy</Typography>
					</Button>
				</ProjectCardRow>
			</ProjectCardContent>
		</ProjectCardContainer>
	);
};

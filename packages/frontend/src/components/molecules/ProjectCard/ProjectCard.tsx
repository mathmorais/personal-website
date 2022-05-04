import Image from "next/image";
import {
	ProjectCardContainer,
	ProjectCardContent,
	ProjectCardPhoto,
	ProjectCardRow,
} from "./ProjectCard.styles";
import Link from "next/link";
import { Typography } from "~/components/atoms/Typography/Typography";
import { Button } from "~/components/atoms/Button/Button";
import { useContext } from "react";
import { ModalContext } from "~/contexts/ModalContext";
import { TagList } from "../TagList/TagList";
import { IProject } from "~/interfaces/components/IProject";

export const ProjectCard: React.FC<{ project: IProject }> = ({
	project: { description, redirects, tags, title, photoUrl },
}) => {
	const { openModal } = useContext(ModalContext);

	const openProjectModal = () =>
		openModal({
			description,
			redirects,
			photoUrl,
			tags,
			title,
		});

	return (
		<ProjectCardContainer onClick={openProjectModal}>
			<ProjectCardPhoto>
				<Image
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					src={photoUrl}
				/>
			</ProjectCardPhoto>

			<ProjectCardContent>
				<Typography size="Medium">{title}</Typography>
				<TagList tags={tags} />
				<Typography size="Small">{description}</Typography>
			</ProjectCardContent>
		</ProjectCardContainer>
	);
};

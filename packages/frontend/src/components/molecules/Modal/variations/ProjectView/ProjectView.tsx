import Image from "next/image";
import { useContext, useCallback } from "react";
import { Anchor } from "~/components/atoms/Anchor/Anchor";
import { Button } from "~/components/atoms/Button/Button";
import { Typography } from "~/components/atoms/Typography/Typography";
import { TagList } from "~/components/molecules/TagList/TagList";
import { ModalContext } from "~/contexts/ModalContext";
import { IProject } from "~/interfaces/components/IProject";
import { Modal } from "../../Modal";
import { ModalPhoto, ModalRedirects } from "./ProjectView.styles";

type ProjectViewModalProps = {
	title?: string;
	tags?: string[];
	description?: string;
	image?: string;
};

export const ProjectViewModal: React.FC<ProjectViewModalProps> = () => {
	const { payload } = useContext(ModalContext);

	const { description, photoUrl, redirects, tags, title } = useCallback(() => {
		const projectPayload = payload as IProject;
		return { ...projectPayload };
	}, [payload])();

	const handleSerializeRedirects = () => {
		return redirects.map((redirect, index) => (
			<Anchor href={redirect.url} target={"_blank"} key={index}>
				<Button centralized fitContent>
					<Typography size="Small">{redirect.label}</Typography>
				</Button>
			</Anchor>
		));
	};

	if (!payload) return <></>;

	return (
		<Modal>
			<ModalPhoto>
				<Image
					layout="fill"
					objectFit="cover"
					alt={`${title} Preview`}
					src={photoUrl}
					placeholder="blur"
					blurDataURL="data:iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOUPwMAARAA7QxBaNsAAAAASUVORK5CYII="
				/>
			</ModalPhoto>

			<Typography>{title}</Typography>
			<TagList tags={tags} />
			<Typography weight={400} size={"Small"}>
				{description}
			</Typography>
			<ModalRedirects>{handleSerializeRedirects()}</ModalRedirects>
		</Modal>
	);
};

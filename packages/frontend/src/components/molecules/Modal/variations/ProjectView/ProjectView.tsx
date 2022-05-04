import Image from "next/image";
import { useContext, useMemo } from "react";
import { Anchor } from "~/components/atoms/Anchor/Anchor";
import { Button } from "~/components/atoms/Button/Button";
import { Typography } from "~/components/atoms/Typography/Typography";
import { TagList } from "~/components/molecules/TagList/TagList";
import { ModalContext } from "~/contexts/ModalContext";
import { IProject } from "~/interfaces/components/IProject";
import { Modal } from "../../Modal";
import { ModalPhoto } from "./ProjectView.styles";

type ProjectViewModalProps = {
	title?: string;
	tags?: string[];
	description?: string;
	image?: string;
};

export const ProjectViewModal: React.FC<ProjectViewModalProps> = () => {
	const { payload } = useContext(ModalContext);

	if (!payload) return <></>;

	const { description, photoUrl, redirects, tags, title } = useMemo(() => {
		const projectPayload = payload as IProject;
		return { ...projectPayload };
	}, [payload]);

	const handleSerializeRedirects = () => {
		return redirects.map((redirect) => (
			<Anchor href={redirect.url} target={"_blank"}>
				<Button centralized fitContent>
					<Typography size="Small">{redirect.label}</Typography>
				</Button>
			</Anchor>
		));
	};
	return (
		<Modal>
			<Image
				width="1920px"
				height="1080px"
				layout="intrinsic"
				objectFit="cover"
				alt={`${title} Preview`}
				src={photoUrl}
			/>
			<Typography>{title}</Typography>
			<TagList tags={tags} />
			<Typography weight={400} size={"Small"}>
				{description}
			</Typography>
			{handleSerializeRedirects()}
		</Modal>
	);
};

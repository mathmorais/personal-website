import { ISkill } from "~/interfaces/components/ISkill";
import { SkillCardContainer, SkillCardIcon } from "./SkillCard.styles";
import { Typography } from "~/components/atoms/Typography/Typography";
import { Icons } from "~/constants/icons";

export const SkillCard: React.FC<{ skill: ISkill }> = ({ skill }) => {
	const Icon = new Icons().getIcon(skill.name) ?? undefined;

	return (
		<SkillCardContainer>
			<SkillCardIcon>{Icon && <Icon />}</SkillCardIcon>
			<Typography weight={400}>{skill.name}</Typography>
		</SkillCardContainer>
	);
};

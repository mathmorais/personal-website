import { useMemo } from "react";
import { SkillCard } from "~/components/molecules/SkillCard/SkillCard";
import { ISkill } from "~/interfaces/components/ISkill";
import { SkillsListContainer } from "./SkillsList.styles";

export const SkillsList: React.FC<{ skills: ISkill[] }> = ({ skills }) => {
	const serializedSkills = useMemo(() => {
		return skills.map((skill, index) => {
			return <SkillCard key={index} skill={skill} />;
		});
	}, [skills]);

	return <SkillsListContainer>{serializedSkills}</SkillsListContainer>;
};

import { useState, useCallback } from "react";
import { ButtonRound } from "~/components/atoms/Button/variations/Button.round";
import { SectionSelectorContainer } from "./SectionSelector.styles";

type SectionSelectorProps = {
	sectionCount: number;
};

export const SectionSelector: React.FC<SectionSelectorProps> = ({
	sectionCount,
}) => {
	const [selectedSection, setSelectedSection] = useState<number>(0);

	const handleSerializeSections = useCallback(() => {
		const serializedSections = [];
		for (let index = 0; index < sectionCount; index++) {
			serializedSections.push(
				<ButtonRound
					selected={selectedSection === index}
					onClick={() => setSelectedSection(index)}
				/>
			);
		}
		return serializedSections;
	}, [selectedSection]);

	return (
		<SectionSelectorContainer>
			{handleSerializeSections()}
		</SectionSelectorContainer>
	);
};

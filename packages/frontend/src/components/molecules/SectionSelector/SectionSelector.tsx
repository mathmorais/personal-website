import { useState, useCallback } from "react";
import { Anchor } from "~/components/atoms/Anchor/Anchor";
import { ButtonRound } from "~/components/atoms/Button/variations/Button.round";
import { ISection } from "~/interfaces/components/ISection";
import { SectionSelectorContainer } from "./SectionSelector.styles";

type SectionSelectorProps = {
	sections: ISection[];
};

export const SectionSelector: React.FC<SectionSelectorProps> = ({
	sections,
}) => {
	const [selectedSection, setSelectedSection] = useState<number>(0);
	const handleSerializeSections = useCallback(() => {
		return sections.map((section, index) => {
			return (
				<Anchor href={`#${section.name}`}>
					<ButtonRound
						key={index}
						selected={selectedSection === index}
						onClick={() => setSelectedSection(index)}
					/>
				</Anchor>
			);
		});
	}, [selectedSection]);

	return (
		<SectionSelectorContainer>
			{handleSerializeSections()}
		</SectionSelectorContainer>
	);
};

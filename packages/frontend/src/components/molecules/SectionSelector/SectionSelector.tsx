import { useState, useMemo } from "react";
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
	const serializedSections = useMemo(() => {
		return sections.map((section, index) => {
			return (
				<Anchor key={index} href={`#${section.name}`}>
					<ButtonRound
						selected={selectedSection === index}
						onClick={() => setSelectedSection(index)}
					/>
				</Anchor>
			);
		});
	}, [sections, selectedSection]);

	return (
		<SectionSelectorContainer>{serializedSections}</SectionSelectorContainer>
	);
};

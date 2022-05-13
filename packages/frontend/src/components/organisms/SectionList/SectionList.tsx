import { useMemo } from "react";
import { Typography } from "~/components/atoms/Typography/Typography";
import { Section } from "~/components/molecules/Section/Section";
import { SectionContextProvider } from "~/contexts/SectionContext";
import { ISection } from "~/interfaces/components/ISection";
import { SectionListContainer } from "./SectionList.styles";

type SectionListProps = {
	sections: ISection[];
};

export const SectionList: React.FC<SectionListProps> = ({ sections }) => {
	const serializedSections = useMemo(() => {
		return sections.map((section, index) => (
			<Section
				id={`#${section.name ?? section.title}`}
				fillScreen
				title={section.title}
				description={section.description}
				key={index}
				{...section.options}
			>
				{section.content}
			</Section>
		));
	}, [sections]);

	return (
		<SectionContextProvider>
			<SectionListContainer>{serializedSections}</SectionListContainer>
		</SectionContextProvider>
	);
};

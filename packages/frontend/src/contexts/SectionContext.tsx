import { createContext, useState } from "react";

type SectionContextProps = {
	section: string;
	assignSection: (section: string) => void;
};

export const SectionContext = createContext({} as SectionContextProps);

export const SectionContextProvider: React.FC = ({ children }) => {
	const [section, setSection] = useState<string>("");

	const assignSection = (section: string) => {
		setSection(section);
	};

	return (
		<SectionContext.Provider value={{ section, assignSection }}>
			{children}
		</SectionContext.Provider>
	);
};

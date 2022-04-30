import { useMemo, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "~/components/atoms/Button/Button";
import {
	TabSelectedContent,
	TabSelectorContainer,
	TabSelectorWrapper,
} from "./TabSelector.styles";
import { ITab } from "~/interfaces/components/ITab";

type TabSelectorProps = {
	tabs: ITab[];
};

export const TabSelector: React.FC<TabSelectorProps> = ({ tabs }) => {
	const [currentTab, setCurrentTab] = useState<number>(0);

	const currentTabContent = useMemo(() => {
		return tabs && tabs[currentTab].content;
	}, [currentTab]);

	const handleSerializeTabs = useCallback(
		(tabsList: ITab[]) => {
			if (tabsList?.length > 0) {
				return tabsList.map(({ title }, index) => {
					return (
						<Button
							selected={currentTab === index}
							onClick={() => setCurrentTab(index)}
						>
							{title}
						</Button>
					);
				});
			}
		},
		[currentTab]
	);

	const ANIMATION_PROPS = {
		initial: { opacity: 0, x: -50 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -50 },
	};

	return (
		<TabSelectorWrapper>
			<TabSelectorContainer>{handleSerializeTabs(tabs)}</TabSelectorContainer>
			<AnimatePresence>
				<TabSelectedContent layout>
					{currentTab !== null && (
						<motion.div key={currentTab} {...ANIMATION_PROPS}>
							{currentTabContent}
						</motion.div>
					)}
				</TabSelectedContent>
			</AnimatePresence>
		</TabSelectorWrapper>
	);
};

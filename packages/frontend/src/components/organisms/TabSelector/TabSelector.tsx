import { useMemo, useState, useCallback } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Button } from "~/components/atoms/Button/Button";
import {
	TabSelectedContent,
	TabSelectorContainer,
	TabSelectorWrapper,
} from "./TabSelector.styles";
import { ITab } from "~/interfaces/components/ITab";

type TabSelectorProps = {
	tabs: ITab[];
	onTabChange?: (tab: ITab) => void;
};

export const TabSelector: React.FC<TabSelectorProps> = ({
	tabs,
	onTabChange,
}) => {
	const [currentTab, setCurrentTab] = useState<number>(0);

	const currentTabContent = useMemo(() => {
		return tabs.length > 0 && tabs[currentTab].content;
	}, [currentTab, tabs]);

	const handleSerializeTabs = useCallback(
		(tabsList: ITab[]) => {
			if (tabsList?.length > 0) {
				return tabsList.map((tab, index) => {
					return (
						<Button
							key={index}
							selectedColor={tab.color}
							selected={currentTab === index}
							onClick={() => {
								setCurrentTab(index);
								onTabChange && onTabChange(tab);
							}}
						>
							{tab.title}
						</Button>
					);
				});
			}
		},
		[currentTab, onTabChange]
	);

	const ANIMATION_PROPS = {
		initial: { opacity: 0, x: -100 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -100 },
	};

	return (
		<TabSelectorWrapper>
			<TabSelectorContainer>{handleSerializeTabs(tabs)}</TabSelectorContainer>
			<AnimatePresence>
				<TabSelectedContent>
					{currentTab !== null && (
						<m.div key={currentTab} {...ANIMATION_PROPS}>
							{currentTabContent}
						</m.div>
					)}
				</TabSelectedContent>
			</AnimatePresence>
		</TabSelectorWrapper>
	);
};

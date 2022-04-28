import { ComponentPropsWithoutRef, useCallback } from "react";
import { NavigatorItem } from "~/components/atoms/NavigatorItem/NavigatorItem";
import { NavigatorContainer } from "./Navigator.styles";

type NavigatorProps = {
	navigations: ComponentPropsWithoutRef<typeof NavigatorItem>[];
};

export const Navigator: React.FC<NavigatorProps> = ({ navigations }) => {
	const serializeNavigations = useCallback(() => {
		return navigations.map((navigation, index) => {
			const Label = navigation.label as React.FunctionComponent;
			return (
				<NavigatorItem key={index} navigateTo={navigation.navigateTo}>
					{typeof navigation.label === "string" ? navigation.label : <Label />}
				</NavigatorItem>
			);
		});
	}, [Navigator]);

	return <NavigatorContainer>{serializeNavigations()}</NavigatorContainer>;
};

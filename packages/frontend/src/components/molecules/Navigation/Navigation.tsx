import { ComponentPropsWithoutRef, useCallback } from "react";
import { Anchor } from "~/components/atoms/Anchor/Anchor";
import { NavigationContainer } from "./Navigation.styles";

type NavigationProps = {
	navigations: ComponentPropsWithoutRef<typeof Anchor>[];
};

export const Navigation: React.FC<NavigationProps> = ({ navigations }) => {
	const serializeNavigations = useCallback(() => {
		return navigations.map((navigation, index) => {
			const Label = navigation.label as React.FunctionComponent;
			return (
				<Anchor key={index} href={navigation.href}>
					{typeof navigation.label === "string" ? navigation.label : <Label />}
				</Anchor>
			);
		});
	}, [Navigation]);

	return <NavigationContainer>{serializeNavigations()}</NavigationContainer>;
};

import { ComponentPropsWithoutRef } from "react";
import { Section } from "~/components/molecules/Section/Section";

export interface ISection {
	title?: string;
	name?: string;
	description?: string;
	content: JSX.Element;
	options?: ComponentPropsWithoutRef<typeof Section>;
}

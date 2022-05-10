import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./Header";

export default {
	title: "Header",
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
	return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	logo: "mathmorais.dev",
	navigations: [
		{
			label: "Home",
			href: "#",
		},
	],
};

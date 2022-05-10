import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Presentation } from "./Presentation";

export default {
	title: "Header",
	component: Presentation,
} as ComponentMeta<typeof Presentation>;

const Template: ComponentStory<typeof Presentation> = (args) => {
	return <Presentation {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	presentationText: "Hi I'm a Frontend Developer",
};

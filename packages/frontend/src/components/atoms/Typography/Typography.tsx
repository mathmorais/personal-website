import { textSizes, TextSizesKey } from "./Typography.styles";

type TypographyProps = {
	size?: TextSizesKey;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const Typography: React.FC<TypographyProps> = ({
	size,
	children,
	...props
}) => {
	const Text = textSizes[size ?? "Medium"];

	return <Text {...props}>{children}</Text>;
};

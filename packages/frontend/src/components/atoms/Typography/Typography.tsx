import { forwardRef, HTMLAttributes, ForwardRefRenderFunction } from "react";
import { textSizes, TextSizesKey, TextStyleProps } from "./Typography.styles";

type ParagraphyAttributes = HTMLAttributes<HTMLParagraphElement>;

type TypographyProps = {
	size?: TextSizesKey;
} & ParagraphyAttributes &
	TextStyleProps;

const TypographyRenderFn: ForwardRefRenderFunction<
	HTMLParagraphElement,
	TypographyProps
> = ({ size, children, ...props }, ref) => {
	const Text = textSizes[size ?? "Medium"];

	return (
		<Text ref={ref} {...props}>
			{children}
		</Text>
	);
};

export const Typography = forwardRef(TypographyRenderFn);

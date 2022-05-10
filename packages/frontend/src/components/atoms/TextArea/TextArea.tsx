import { forwardRef, ForwardRefRenderFunction } from "react";
import { TextAreaContainer } from "./TextArea.styles";

type TextAreaProps = {} & React.HTMLAttributes<HTMLTextAreaElement>;

const TextAreaFunction: ForwardRefRenderFunction<
	HTMLTextAreaElement,
	TextAreaProps
> = (props, ref) => {
	return <TextAreaContainer {...props} ref={ref} />;
};

export const TextArea = forwardRef(TextAreaFunction);

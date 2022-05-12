import {
	forwardRef,
	ForwardRefRenderFunction,
	TextareaHTMLAttributes,
} from "react";
import { TextAreaContainer } from "./TextArea.styles";

type TextAreaProps = {} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextAreaFunction: ForwardRefRenderFunction<
	HTMLTextAreaElement,
	TextAreaProps
> = (props, ref) => {
	return <TextAreaContainer {...props} ref={ref} />;
};

export const TextArea = forwardRef(TextAreaFunction);

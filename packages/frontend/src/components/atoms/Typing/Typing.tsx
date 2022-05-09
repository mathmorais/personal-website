import { useEffect, useRef, useState } from "react";
import Typed, { TypedOptions } from "typed.js";
import { TypingText, TypingWrapper } from "./Typing.styled";

type TypingProps = {
	options: TypedOptions;
	staticText?: string;
};

export const Typing: React.FC<TypingProps> = ({ options, staticText }) => {
	const [componentMounted, setComponentMounted] =
		useState<boolean | null>(false);
	const [typed, setTyped] = useState<Typed | null>(null);
	const typedElement = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		setComponentMounted(true);
	}, []);

	useEffect(() => {
		if (typedElement.current) {
			const element = typedElement.current as Element;
			const typedInstance = new Typed(element, options);
			setTyped(typedInstance);
		}

		return () => {
			typed?.destroy();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [componentMounted]);

	return (
		<TypingWrapper className="type-wrap">
			{!componentMounted ? (
				<TypingText>{staticText}</TypingText>
			) : (
				<TypingText ref={typedElement} size="ExtraLarge" weight={400} />
			)}
		</TypingWrapper>
	);
};

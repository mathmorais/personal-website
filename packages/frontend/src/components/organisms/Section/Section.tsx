import { useEffect } from "react";
import {
	useAnimation,
	motion,
	AnimationProps,
	animations,
} from "framer-motion";
import { InView } from "react-intersection-observer";
import { Typography } from "~/components/atoms/Typography/Typography";
import { VerticalLine } from "~/components/atoms/VerticalLine/VerticalLine";
import {
	SectionStyleProps,
	SectionContainer,
	SectionContent,
	SectionTitle,
	SectionContentAnimate,
} from "./Section.styles";

type SectionProps = {
	title?: string;
} & SectionStyleProps;

export const Section: React.FC<SectionProps> = ({
	children,
	title,
	...props
}) => {
	const controls = useAnimation();

	const variants = {
		initial: {
			opacity: 0,
			y: -60,
		},
		animate: {
			opacity: 1,
			y: 0,
		},
		exit: {
			y: 60,
			opacity: 0,
		},
	};

	useEffect(() => {
		controls.set("initial");
	}, []);

	return (
		<InView threshold={0.5}>
			{({ ref, inView }) => {
				inView ? controls.start("animate") : controls.start("exit");

				return (
					<SectionContainer {...props}>
						<SectionContentAnimate variants={variants} animate={controls}>
							<SectionContent ref={ref}>
								{title && (
									<SectionTitle>
										<VerticalLine />
										<Typography size="Large">{title}</Typography>
									</SectionTitle>
								)}

								{children}
							</SectionContent>
						</SectionContentAnimate>
					</SectionContainer>
				);
			}}
		</InView>
	);
};

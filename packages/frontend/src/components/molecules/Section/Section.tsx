import { HTMLAttributes, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Typography } from "~/components/atoms/Typography/Typography";
import { VerticalLine } from "~/components/atoms/VerticalLine/VerticalLine";
import {
	SectionStyleProps,
	SectionContainer,
	SectionContent,
	SectionTitle,
	SectionContentAnimate,
	SectionDescription,
} from "./Section.styles";

type SectionProps = {
	title?: string;
	description?: string;
} & SectionStyleProps &
	HTMLAttributes<HTMLDivElement>;

export const Section: React.FC<SectionProps> = ({
	children,
	description,
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
	}, [controls]);

	return (
		<InView threshold={0.2}>
			{({ ref, inView }) => {
				inView && controls.start("animate");

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
								{description && (
									<SectionDescription>
										<Typography weight={400} size="Small">
											{description}
										</Typography>
									</SectionDescription>
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

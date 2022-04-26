import styled from "styled-components";

const Text = styled.p<{ weight?: number }>`
	font-family: ${({ theme }) => theme.font.families.primary};
	font-weight: ${({ weight, theme }) => weight ?? 500};
`;

export const ExtraLarge = styled(Text).attrs({ as: "h1" })`
	font-size: ${({ theme }) => theme.font.sizes.extraLarge};
	font-weight: 700;
`;

export const Large = styled(Text).attrs({ as: "p" })`
	font-size: ${({ theme }) => theme.font.sizes.large};
	font-weight: 600;
`;

export const Medium = styled(Text).attrs({ as: "p" })`
	font-size: ${({ theme }) => theme.font.sizes.medium};
	font-weight: 600;
`;

export const Small = styled(Text).attrs({ as: "p" })`
	font-size: ${({ theme }) => theme.font.sizes.small};
	font-weight: 500;
`;

export const ExtraSmall = styled(Text).attrs({ as: "p" })`
	font-size: ${({ theme }) => theme.font.sizes.extraSmall};
	font-weight: 400;
`;

export const textSizes = {
	ExtraLarge,
	Large,
	Medium,
	Small,
	ExtraSmall,
};

export type TextSizesKey = keyof typeof textSizes;

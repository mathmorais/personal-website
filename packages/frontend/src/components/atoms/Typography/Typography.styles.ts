import styled from "styled-components";

export type TextStyleProps = {
	weight?: number;
};

const Text = styled.p<TextStyleProps>`
	font-family: ${({ theme }) => theme.font.families.primary};
	font-weight: ${({ weight }) => weight ?? 500};
`;

export const ExtraLarge = styled(Text).attrs({ as: "h1" })`
	font-size: ${({ theme }) => theme.font.sizes.ExtraLarge};
`;

export const Large = styled(Text).attrs({ as: "p" })`
	font-size: ${({ theme }) => theme.font.sizes.Large};
`;

export const Medium = styled(Text).attrs({ as: "p" })`
	font-size: ${({ theme }) => theme.font.sizes.Medium};
`;

export const Small = styled(Text).attrs({ as: "p" })`
	font-size: ${({ theme }) => theme.font.sizes.Small};
`;

export const ExtraSmall = styled(Text).attrs({ as: "p" })`
	font-size: ${({ theme }) => theme.font.sizes.ExtraSmall};
`;

export const textSizes = {
	ExtraLarge,
	Large,
	Medium,
	Small,
	ExtraSmall,
};

export type TextSizesKey = keyof typeof textSizes;

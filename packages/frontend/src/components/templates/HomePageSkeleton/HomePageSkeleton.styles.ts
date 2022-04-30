import styled from "styled-components";

export const HomePageSkeletonWrapper = styled.div`
	height: 100vh;
`;

export const HomePageSkeletonContent = styled.section`
	color: ${({ theme }) => theme.colors.neutrals.white};
`;

export const HomePageSkeletonMain = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex: 1;
	margin: auto;
`;

export const HomePageSkeletonMainContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	margin: auto;
`;

import {
	HomePageSkeletonContent,
	HomePageSkeletonMain,
	HomePageSkeletonMainContent,
	HomePageSkeletonWrapper,
} from "./HomePageSkeleton.styles";

export const HomePageSkeleton: React.FC<{
	header: React.ReactNode;
}> = ({ header, children }) => {
	const Header = header ?? <></>;

	return (
		<HomePageSkeletonWrapper>
			<HomePageSkeletonContent>
				<HomePageSkeletonMain>
					{Header}
					<HomePageSkeletonMainContent>{children}</HomePageSkeletonMainContent>
				</HomePageSkeletonMain>
			</HomePageSkeletonContent>
		</HomePageSkeletonWrapper>
	);
};

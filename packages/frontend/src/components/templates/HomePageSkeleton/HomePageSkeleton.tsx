import { Header } from "../../organisms/Header/Header";
import { HomePageSkeletonWrapper } from "./HomePageSkeleton.styles";

export const HomePageSkeleton = () => {
	return (
		<HomePageSkeletonWrapper>
			<Header logo="mathmorais.dev" navigations={[]} />
		</HomePageSkeletonWrapper>
	);
};

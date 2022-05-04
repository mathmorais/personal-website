import { useCallback } from "react";
import { ProjectCard } from "~/components/molecules/ProjectCard/ProjectCard";
import { IProject } from "~/interfaces/components/IProject";
import { ProjectsGridContainer } from "./ProjectsGrid.styles";

export const ProjectsGrid: React.FC<{ projects: IProject[] }> = ({
	children,
	projects,
}) => {
	const handleSerializeProjects = useCallback(() => {
		return projects.map((project, index) => (
			<ProjectCard key={index} project={project} />
		));
	}, [projects]);

	return (
		<ProjectsGridContainer>
			{handleSerializeProjects() ?? children}
		</ProjectsGridContainer>
	);
};

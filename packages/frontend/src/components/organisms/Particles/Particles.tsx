import { useCallback } from "react";
import TsParticles from "react-tsparticles";

import { ParticlesWrapper } from "./Particles.styles";
import { particlesConfig } from "~/config/particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export const Particles: React.FC = ({ children }) => {
	const particleInit = useCallback(async (main: Engine) => {
		await loadFull(main);
	}, []);

	return (
		<ParticlesWrapper>
			<TsParticles
				id="tsparticles"
				init={particleInit}
				options={particlesConfig}
			>
				{children}
			</TsParticles>
		</ParticlesWrapper>
	);
};

import type { IParticlesProps } from "react-tsparticles";

export const particlesConfig: IParticlesProps["options"] = {
	particles: {
		number: {
			value: 200,
			density: {
				enable: true,
			},
		},
		color: {
			value: "#ffffff",
		},
		shape: {
			type: "circle",
		},
		opacity: {
			value: 0.2,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 40,
				size_min: 0.1,
				sync: false,
			},
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 5,
			direction: "left",
			random: true,
			straight: true,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	retina_detect: true,
};

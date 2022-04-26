import { RefObject, useEffect, useRef } from "react";

type Element = RefObject<HTMLDivElement>;

type GetScrollPositionProps = {
	element?: Element;
	useWindow?: boolean;
};

const isBrowser = typeof window !== `undefined`;

const getScrollPosition = ({ element, useWindow }: GetScrollPositionProps) => {
	if (!isBrowser) return { x: 0, y: 0 };

	if (useWindow) {
		return { x: window.scrollX, y: window.scrollY };
	}

	const target = element?.current || document.body;

	if (target) {
		const { left, top } = target.getBoundingClientRect();
		return { x: left, y: top };
	}

	return { x: 0, y: 0 };
};

export type EffectCallback = (position: {
	prevPos: { x: number; y: number };
	currPos: { x: number; y: number };
}) => void;

type UseScrollPosition = (props: {
	effect: EffectCallback;
	useWindow: boolean;
	element?: Element;
	deps?: any[];
	wait?: number;
}) => void;

const scrollPositionHandler: UseScrollPosition = ({
	effect,
	useWindow,
	element,
	deps = [],
	wait = 100,
}) => {
	const position = useRef(getScrollPosition({ element }));

	let throttleTimeout: NodeJS.Timeout | null = null;

	const callBack = () => {
		const currPos = getScrollPosition({ element, useWindow });
		effect({ prevPos: position.current, currPos });
		position.current = currPos;
		throttleTimeout = null;
	};

	useEffect(() => {
		const handleScroll = () => {
			if (wait) {
				if (throttleTimeout === null) {
					throttleTimeout = setTimeout(callBack, wait);
				}
			} else {
				callBack();
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, deps);
};

export const useScrollPosition = () => {
	return { scrollPositionHandler };
};

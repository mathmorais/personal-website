import { useState } from "react";
import { createContext } from "react";

type ModalContextProps = {
	show: boolean;
	payload: unknown;
	openModal: (payload?: unknown) => void;
	closeModal: () => void;
};

export const ModalContext = createContext({} as ModalContextProps);

export const ModalContextProvider: React.FC = ({ children }) => {
	const [show, setShow] = useState(false);
	const [payload, setPayload] = useState<unknown>(null);

	const openModal = (payload: unknown) => {
		setShow(true);
		setPayload(payload);
	};

	const closeModal = () => setShow(false);

	return (
		<ModalContext.Provider value={{ closeModal, openModal, show, payload }}>
			{children}
		</ModalContext.Provider>
	);
};

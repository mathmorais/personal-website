import { AnimatePresence, Variants } from "framer-motion";
import React, { useContext, useState } from "react";
import { ModalContext } from "~/contexts/ModalContext";
import {
	ModalBackground,
	ModalContainer,
	ModalContent,
	ModalMain,
} from "./Modal.styles";

type ModalProps = {
	show?: boolean;
};

export const Modal: React.FC<ModalProps> = ({ children, show }) => {
	const modalContext = useContext(ModalContext);

	const shouldShow = modalContext.show || show;

	const contentVariants = {
		initial: {
			opacity: 0,
			y: "-50%",
		},
		open: {
			opacity: 1,
			y: "0%",
		},
		exit: {
			opacity: 0,
			y: "50%",
		},
	} as Variants;

	const containerVariants = {
		initial: {
			opacity: 0,
		},
		open: {
			opacity: 1,
		},
	} as Variants;

	return (
		<AnimatePresence>
			{shouldShow && (
				<ModalContainer
					key={`modal-${shouldShow}`}
					initial={"initial"}
					animate={"open"}
					exit={"initial"}
					variants={containerVariants}
				>
					<ModalBackground onClick={modalContext.closeModal} />
					<ModalMain
						initial={"initial"}
						animate={"open"}
						exit={"exit"}
						variants={contentVariants}
					>
						<ModalContent>{children}</ModalContent>
					</ModalMain>
				</ModalContainer>
			)}
		</AnimatePresence>
	);
};

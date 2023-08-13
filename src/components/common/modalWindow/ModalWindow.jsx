import React from "react";
import style from "./ModalWindow.module.css";

const ModalWindow = ({ children, title, onClose }) => {
	return (
		<div className={style.modal}>
			<div className={style.modalContent}>
				<div className={style.title}>
					<h1>{title}</h1>
				</div>
				<div className={style.content}>{children}</div>
				<div className={style.footer}>
					<button onClick={onClose}>close</button>
				</div>
			</div>
		</div>
	);
};

export default ModalWindow;

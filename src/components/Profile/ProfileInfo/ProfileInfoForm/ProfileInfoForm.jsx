import React, { useState } from "react";
import style from "./../../../common/modalWindow/ModalWindow.module.css";
import { useForm } from "react-hook-form";

const ProfileInfoForm = ({ onClose, onSave, profile }) => {
	const [lookingForAJob, setLookingForAJob] = useState(true);
	const {
		register,
		handleSubmit,
		watch,
		formState: { isValid, errors, isDirty },
	} = useForm();

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
		onSave(data);
	};
	const lookingForAJobChange = () => {
		setLookingForAJob(!lookingForAJob ? true : false);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={style.modal}>
				<div className={style.modalContent}>
					<div className={style.title}>
						<h1>EditMode</h1>
					</div>
					<div className={style.content}>
						<input
							placeholder="Full Name"
							{...register("fullName")}
						/>
						<br />
						lookingForAJob:
						<input
							{...register("lookingForAJob")}
							onClick={lookingForAJobChange}
							type="checkbox"
							checked={lookingForAJob}
						/>
						{lookingForAJob ? (
							<>
								<p>Professional skills:</p>{" "}
								<input
									{...register("lookingForAJobDescription")}
									placeholder="Professional skills"
								/>
							</>
						) : (
							""
						)}
						<br />
						<input
							placeholder="About me"
							{...register("aboutMe")}
						/>
					</div>
					<footer className={style.footer}>
						<button className={style.btn}>save</button>
					</footer>
				</div>
			</div>
		</form>
	);
};

export default ProfileInfoForm;

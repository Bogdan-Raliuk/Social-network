import React, { useState } from "react";
import style from "./../../../common/modalWindow/ModalWindow.module.css";
import { useForm } from "react-hook-form";

const ProfileInfoForm = ({ onClose, onSave, profile }) => {
	const [lookingForAJob, setLookingForAJob] = useState(
		profile.lookingForAJob
	);
	const { register, handleSubmit } = useForm({
		defaultValues: {
			fullName: profile.fullName,
			lookingForAJob: profile.lookingForAJob,
			lookingForAJobDescription: profile.lookingForAJobDescription,
			aboutMe: profile.aboutMe,
			contacts: profile.contacts,
		},
	});

	const onSubmit = (data) => {
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
							type="checkbox"
							onClick={lookingForAJobChange}
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
					<div>
						{Object.keys(profile.contacts).map((key) => {
							return (
								<div key={key}>
									<b>{key}</b>
									<input
										{...register(`contacts.${key}`)}
										placeholder={key}
										className={style.input}
										type="text"
									/>
								</div>
							);
						})}
					</div>
					<footer className={style.footer}>
						<button
							onClick={onClose}
							className={style.btn}>
							close
						</button>
						<button className={style.btn}>save</button>
					</footer>
				</div>
			</div>
		</form>
	);
};

export default ProfileInfoForm;

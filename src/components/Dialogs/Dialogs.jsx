import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { useForm } from "react-hook-form";

function Dialogs(props) {
	let dialogsElements = props.state.dialogsPage.dialogsData.map((d) => (
		<DialogItem
			key={d.id}
			name={d.name}
			id={d.id}
		/>
	));

	let messagesElements = props.state.dialogsPage.messagesData.map((m) => (
		<Message
			message={m.message}
			key={m.id}
		/>
	));

	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isDirty },
	} = useForm();

	const onSubmit = (data) => {
		props.sendMessage(data.messageText);
	};

	return (
		<div className={style.dialogsonSubmit}>
			<div className={style.dialogs_items}>{dialogsElements}</div>
			<div className={style.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						{errors?.messageText && (
							<p className={style.error}>
								{errors.messageText.message || "error"}
							</p>
						)}
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<textarea
							{...register("messageText", {
								required: "поле обязательно к заполнению!",
							})}
							placeholder="введите сообшение"
						/>
						<div>
							<button disabled={!isValid && !isDirty}>
								Отправить сообшение
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;

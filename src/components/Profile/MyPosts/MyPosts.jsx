import React from "react";
import { useForm } from "react-hook-form";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
	let postsElements = props.posts.map((p) => (
		<Post
			key={p.id}
			message={p.message}
			likes={p.likeCount}
		/>
	));
	/*********************************************************/
	const {
		register,
		handleSubmit,
		formState: { isValid, errors, isDirty },
	} = useForm();

	const onSubmit = (data) => {
		props.addPost(data.postText);
	};

	return (
		<div className={style.main}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					{errors?.postText && (
						<p className={style.error}>
							{errors.postText.message || "error"}
						</p>
					)}
				</div>
				<textarea
					{...register("postText", {
						required: "поле обязательно к заполнению!",
					})}
					name="postText"
					placeholder="Введите текст"
				/>
				<div>
					<button disabled={!isValid && !isDirty}>add post</button>
				</div>
			</form>
			<div className={style.posts}>
				<h3>My post</h3>
				<p>New post</p>
			</div>
			{postsElements}
		</div>
	);
});

export default MyPosts;

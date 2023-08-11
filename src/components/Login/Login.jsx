import React from "react";
import { useForm } from "react-hook-form";
import style from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

function Login(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		props.login(data);
	};

	if (props.isAuth) {
		return <Navigate to={"/profile"} />;
	}

	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={style.error}>
					{props.error ? props.error : ""}
				</div>
				{errors?.Email?.message ? (
					<div>
						{errors?.Email && (
							<p className={style.error}>
								{errors.Email.message || "error"}
							</p>
						)}
					</div>
				) : errors?.Password?.message ? (
					<div>
						{errors?.Password && (
							<p className={style.error}>
								{errors.Password.message || "error"}
							</p>
						)}
					</div>
				) : (
					""
				)}

				<div>
					<input
						{...register("Email", {
							required: "Обязательное поле ввода",
						})}
						placeholder="Email"
						type="email"
					/>
				</div>
				<div>
					<input
						{...register("Password", {
							required: "Обязательное поле ввода",
						})}
						type="password"
						placeholder="Password"
					/>
				</div>
				<div>
					<input
						{...register("RememberMe")}
						type="checkbox"
					/>
					Remember me
				</div>
				<div>
					<button>Submit</button>
				</div>
			</form>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		error: state.auth.error,
	};
};

export default connect(mapStateToProps, { login })(Login);

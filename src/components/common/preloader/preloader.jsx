import { connect } from "react-redux";
import loadingSVG from "../../../assets/images/loading.svg";

function PreloaderChildren(props) {
	return (
		<>
			{props.isFetching ? (
				<img
					src={loadingSVG}
					alt="loading"
				/>
			) : (
				props.children
			)}
		</>
	);
}
export function Preloader(props) {
	return (
		<img
			src={loadingSVG}
			alt="loading"
		/>
	);
}

const mapStateToProps = (state) => ({
	isFetching: state.usersPage.isFetching,
});

export default connect(mapStateToProps, null)(PreloaderChildren);
connect(mapStateToProps, null)(Preloader);

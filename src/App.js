//GLobal imports
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import "./main.css";
//Components
import DialogsConteiner from "./components/Dialogs/DialogsConteiner";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Preloader } from "./components/common/preloader/preloader";
//Some functions and so on
import { initializeApp } from "./redux/appReducer";
//lazy load
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const Music = React.lazy(() => import("./components/Music/Music"));
const News = React.lazy(() => import("./components/News/News"));
const UsersContainer = React.lazy(() =>
	import("./components/Users/UsersContainer")
);

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (this.props.initialized === false) {
			return <Preloader />;
		}
		return (
			<div className="App">
				<div className="app-wraper">
					<HeaderContainer />
					<NavBar />
					<div className="app-wraper-content">
						<Suspense
							fallback={
								<div>
									<Preloader />
								</div>
							}>
							<Routes>
								<Route
									path=""
									element={<ProfileContainer />}
								/>
								<Route
									path="/profile/:userID?"
									element={<ProfileContainer />}
								/>
								<Route
									path="/dialogs"
									element={<DialogsConteiner />}
								/>
								<Route
									path="/users"
									element={<UsersContainer />}
								/>
								<Route
									path="/news"
									element={<News />}
								/>
								<Route
									path="/music"
									element={<Music />}
								/>
								<Route
									path="/settings"
									element={<Settings />}
								/>
								<Route
									path="/login"
									element={<Login />}
								/>
							</Routes>
						</Suspense>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);

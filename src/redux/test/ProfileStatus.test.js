import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusLegasy from "../../components/Profile/ProfileInfo/ProfileStatusLegasy";

describe("ProfileStatus Component test", () => {
	test("not crash", () => {
		const component = create(<ProfileStatusLegasy status="qqqqww" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("qqqqww");
	});
});

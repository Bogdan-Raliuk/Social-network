export const updateObjectPropInArray = (
	items,
	itemsID,
	objPropsName,
	newObjProp
) => {
	return items.map((u) => {
		if (u[objPropsName] === itemsID) {
			return { ...u, ...newObjProp };
		}
		return u;
	});
};

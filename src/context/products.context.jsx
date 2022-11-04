import { createContext, useState, useEffect } from "react";

import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from "../shop-data.js";

// ---------------------------------------------------------------------

export const CategoriesContext = createContext({
	categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	//* useEffect to create data collection in firestore
	// useEffect(() => {
	// 	addCollectionAndDocuments("collection", SHOP_DATA);
	// }, []);

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCollectionAndDocuments("collection");
			console.log(categoryMap);
			setCategoriesMap(categoryMap);
		};
		getCategoriesMap();
	}, []);

	const value = { categoriesMap };

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};

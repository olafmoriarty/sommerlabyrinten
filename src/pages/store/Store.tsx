import { useEffect, useState, createContext, useContext } from "react";
import { ProductType } from "../../types/types";
import Product from "./Product";

export const StoreContext = createContext({} as StoreContextType);

export const useStore = () => useContext(StoreContext);

const Store = () => {
	return (
		<main>Kommer snart (?)</main>
	)

	const [productsAreFetched, setProductsAreFetched] = useState(false);
	const [products, setProducts] = useState<ProductType[]>([]);
	const [activeProduct, setActiveProduct] = useState(0);

	useEffect(() => {
		fetch('https://merch.olafmoriarty.com/?mode=products')
		.then(res => res.json())
		.then(res => {
			setProducts(res.data);
			console.log(res);
			setProductsAreFetched(true);
		});
	}, []);

	return (
		<StoreContext.Provider value={{
			activeProduct: activeProduct,
			setActiveProduct: setActiveProduct,
		}}>
		<main className="text-box">
		<h1>Butikk</h1>
		{ productsAreFetched ? products.map(el => <Product product={el} key={el.id} />) : null }
		</main>
		</StoreContext.Provider>
	)
}

type StoreContextType = {
	activeProduct : number,
	setActiveProduct : ( key : number ) => void,
}

export default Store;
import { ProductType } from "../../types/types";
import { useStore } from "./Store";

const Product = (props : Props) => {
	const { activeProduct, setActiveProduct } = useStore();
	const { product } = props;

	if (product.id !== activeProduct) {
		return (
			<article className="product preview" onClick={() => setActiveProduct(product.id)}>
				<img src={product.thumb} alt="Forhåndsvisning av produkt" className="thumb" />
				<div>
				<p className="product-name">{product.name}</p>
				<p className="product-price">{product.price.toFixed(2).replace('.', ',').replace(',00', ',—')}</p>
				</div>
			</article>
		)
	}

	return (
		<article className="product">
			<img src={product.thumb} alt="Forhåndsvisning av produkt" className="thumb" />
			<div>
			<h2>{product.name}</h2>
			{product.description}
			{product.variants ? Object.keys(product.variants).map(variantType => <div>{variantType}</div>) : null}
			<label>
				<p></p>
			<p><select></select></p>
			
			</label>
			<p className="product-price">{product.price.toFixed(2).replace('.', ',').replace(',00', ',—')}</p>
			</div>
		</article>
	)
}

type Props = {
	product : ProductType,
}

export default Product;
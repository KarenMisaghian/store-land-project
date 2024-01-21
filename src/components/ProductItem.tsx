import Product from "../models/Product";
import { useShoppingCart } from "../store/CartContext";



const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
    const {increaseItemQuantity} = useShoppingCart();
    return (
        <li>
            <article className="w-[400px] max-h-[1000px] shadow-2xl flex flex-col justify-evenly m-[10px] hover:border-2 pb-10">
                <img src={product.image} alt={product.title} className="max-h-[400px] text-center block" />
                <div>
                    <h3 className="text-center text-l mb-[7px]">{product.title}</h3>
                    <p className="m-[10px] text-justify font-thin align-justify">{product.description}</p>
                </div>
                <div className=" flex justify-evenly text-xl">
                    <p >{`${product.price} $`}</p>
                    <button className=" bg-blue1 border-none rounded-lg p-1 hover:bg-bermuda" onClick={() => increaseItemQuantity(product)} >Add to Cart</button>
                </div>
            </article>
        </li>
    );
}
export default ProductItem;
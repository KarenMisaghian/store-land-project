import CartItem from "../components/CartItem";
import { useShoppingCart } from "../store/CartContext";

const Cart: React.FC = () => {
    const { cartItems } = useShoppingCart();
    let totalCost = 0;
    for(let i = 0; i < cartItems.length; i++) {
        totalCost += cartItems[i].product.price * cartItems[i].quantity;
    }

    const ListOfItems = () => {
        if (cartItems.length > 0) {
            return (
                <div className="mt-[300px]">
                    <h2 className="text-center text-xl mb-[50px] flex justify-center">Your Cart: </h2>
                    <table className="text-[6px] sm:text-[10px] md:text-[20px]">
                        <thead className="border-2">
                            <th className="border-2">number</th>
                            <th className="border-2">Title</th>
                            <th className="max-w-30% border-2">description</th>
                            <th className="border-2">quantity</th>
                            <th className="border-2">price</th>
                            <th className="border-2">total price</th>
                        </thead>
                        {cartItems.map(item => (
                            <CartItem key={item.product.id} number={cartItems.indexOf(item)} />
                        ))}
                        <tfoot className="border-2">
                            <td className="text-center">total</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center">{totalCost}</td>
                        </tfoot>
                    </table>
                </div>
            );
        }
        else {
            return (
                <p className="text-center text-2xl text-darkGrey mt-[300px]" >You have not selected any item!</p>
            );

        }
    }


    return (
        <ListOfItems />
    );

}

export default Cart;
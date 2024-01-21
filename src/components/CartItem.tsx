import { useShoppingCart } from "../store/CartContext";

const CartItem: React.FC<{ number: number }> = (props) => {
    const { cartItems, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useShoppingCart();
    let product = cartItems.map((item) => (item.product))
    let quantity = cartItems.map((item) => (item.quantity));
    let title = cartItems.map((item) => (item.product.title));
    let description = cartItems.map((item) => (item.product.description));
    let price = cartItems.map((item) => (item.product.price));





    return (
        <>
            <tr className="border-2 pl-[50px]">
                <td className="text-center items-center border-2 p-2">
                    {props.number + 1}
                </td>
                <td className="text-center items-center border-2 p-2 w-[400px]">
                    {title[props.number]}
                </td>
                <td className="w-[650px] text-center items-center border-2 p-2">
                    {description[props.number]}
                </td>
                <td className="text-center items-center birder-2 p-2 w-[150px]">
                    <span className="p-2">{quantity[props.number]}</span>
                </td>
                <td className="text-center items-center border-2 p-2 w-[100px]">
                    {price[props.number]}
                </td>
                <td className="text-center items-center border-2 p-2 w-[150px]">
                    <span>{price[props.number] * quantity[props.number]}</span>
                </td>
            </tr>
        </>
    );

};

export default CartItem;
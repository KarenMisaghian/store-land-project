import userIcon from "../assets/userIcon.png"
import logo from "../assets/brandIcon.png"
import { useShoppingCart } from "../store/CartContext"
import { NavLink } from 'react-router-dom';
import MainNavigation from "./MainNavigation";

const Header: React.FC = () => {
    const { cartQuantity } = useShoppingCart();


    return <>
        <header className="flex flex-col  fixed top-0 right-0 left-0">
            <div className="text-center text-2xl bg-gradient-to-b from-tahiti via-bermuda to-blue1 text-purple text-[50px] pb-[20px] pt-[18px] ">Store Land</div>
            <div className="flex justify-evenly items-center pt-3 pb-3 bg-blue1 ">
                <div className="pl-[10px] flex flex-row items-center">
                    <img src={userIcon} alt="user profile" className="mr-[10px]"></img>
                    <div className="text-center">
                        <NavLink
                            to="signin"
                            className=" hover:text-red"
                        >
                            Hi, James!
                        </NavLink>
                    </div>
                </div>
                <div>
                    <img src={logo} alt="a shoping box" className="w-[150px] h-[120px] rounded-md"></img>
                </div>
                <div className="mr-[30px] text-l">
                    <NavLink
                        to="cart"
                        className=" hover:text-red"
                    >
                        cart
                    </NavLink>


                    <span className="bg-red rounded-full">{cartQuantity}</span></div>
            </div>
            <MainNavigation />
        </header>


    </>
}

export default Header;


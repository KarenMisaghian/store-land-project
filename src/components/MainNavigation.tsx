import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className="bg-gradient-to-b from-blue1 via-bermuda to-tahiti text-darkGrey">
      <nav>
        <ul className="flex flex-row justify-evenly p-[20px] text-2xl">
          <li>
            <NavLink
              to="/"
              className=" hover:text-red"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="hover:text-red"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
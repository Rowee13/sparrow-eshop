import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import {
	NavigationContainer,
	NavLinks,
	NavLink,
	LogoContainer,
} from "./navigation.styles";

// ---------------------------------------------------------------------

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<CrownLogo className="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<NavLink
							as="span"
							className="nav-link"
							onClick={signOutUser}
						>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to="/auth">SIGNIN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

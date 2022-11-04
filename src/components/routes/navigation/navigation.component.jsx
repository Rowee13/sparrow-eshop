import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";

// ---------------------------------------------------------------------

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<div className="navigation">
				<Link to="/" className="logo-container">
					<CrownLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link to="/shop" className="nav-link">
						SHOP
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link to="/auth" className="nav-link">
							SIGNIN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

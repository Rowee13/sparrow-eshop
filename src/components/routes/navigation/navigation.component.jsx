import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";

// ---------------------------------------------------------------------

const Navigation = () => {
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
					<Link to="/signin" className="nav-link">
						SIGNIN
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

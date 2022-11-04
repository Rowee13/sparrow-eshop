import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

// ---------------------------------------------------------------------

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<Link to={`/shop/${title}`} className="directory-item-container">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="directory-item-body">
				<h2>{title.toUpperCase()}</h2>
				<p>SHOP NOW</p>
			</div>
		</Link>
	);
};

export default DirectoryItem;

import {
	DirectoryItemContainer,
	DirectoryItemBody,
	BackgroundImage,
} from "./directory-item.styles";

// ---------------------------------------------------------------------

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<DirectoryItemContainer to={`/shop/${title}`}>
			<BackgroundImage imageUrl={imageUrl} />
			<DirectoryItemBody>
				<h2>{title}</h2>
				<p>SHOP NOW</p>
			</DirectoryItemBody>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;

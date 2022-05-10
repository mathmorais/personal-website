import { Typography } from "../Typography/Typography";
import { TagContainer } from "./Tag.styles";

export const Tag: React.FC = ({ children }) => {
	return (
		<TagContainer>
			<Typography size="ExtraSmall">{children}</Typography>
		</TagContainer>
	);
};

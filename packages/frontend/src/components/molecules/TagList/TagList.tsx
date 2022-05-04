import { useCallback } from "react";
import { Tag } from "~/components/atoms/Tag/Tag";
import { TagListContainer } from "./TagList.styles";

export const TagList: React.FC<{ tags: string[] }> = ({ tags }) => {
	const handleSerializeTags = useCallback(() => {
		return tags.map((tag, index) => <Tag key={index}>{tag}</Tag>);
	}, [tags]);

	return <TagListContainer>{handleSerializeTags()}</TagListContainer>;
};

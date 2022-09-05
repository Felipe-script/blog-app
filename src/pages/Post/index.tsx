import React from "react";

import { Footer } from "@/components";
import { useLocation } from "react-router-dom";

import { Post as PostInterface } from '@/types/Post'
import * as S from "./styles";

const Post: React.FC = (): React.ReactElement => {
	const location = useLocation();
	const { imgPostUrl, title, description } = location.state as PostInterface;
	return (
		<S.Wrapper>
			<S.Content>
				<S.ImagePost src={imgPostUrl} />
				<S.InfoPost>
					<S.Title>{title}</S.Title>
					<S.Paragraph>
						{description}
					</S.Paragraph>
				</S.InfoPost>
			</S.Content>
			<Footer />
		</S.Wrapper>
	);
};

export default Post;

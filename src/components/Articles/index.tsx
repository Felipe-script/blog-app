import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Post } from "@/types/Post";
import { Button } from "@/components";
import { useNavigationPost } from '@/hooks/useNavigationPost'
import * as S from "./styles";
import { PRIVATE_PATHS } from "@/enums/routes";

type ArticleProps = {
	posts: Post[];
};

const Articles: React.FC<ArticleProps> = ({ posts }): React.ReactElement => {
	const navigate = useNavigate();
	const { goToPost } = useNavigationPost();
	// const handlePost = useCallback(
	// 	(post: Post) => {
	// 		navigate(`${PRIVATE_PATHS.POSTS}/${post.id}`, {
	// 			state: {
	// 				id: post.id,
	// 				imgPostUrl: post.imgPostUrl,
	// 				title: post.title,
	// 				description: post.description,
	// 			},
	// 		});
	// 	},
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// 	[posts]
	// );
	return (
		<S.ArticlesSection>
			{posts.map((post) => (
				<S.Article key={post.id}>
					<S.ArticleImage src={post.imgPostUrl} />
					<S.ColumnArticle>
						<S.ArticleTitle>{post.title}</S.ArticleTitle>
						<S.DescriptionArticle>{post.description}</S.DescriptionArticle>
						<Button label="Read more" onClick={(): void => goToPost(post)} />
					</S.ColumnArticle>
				</S.Article>
			))}
		</S.ArticlesSection>
	);
};

export default Articles;

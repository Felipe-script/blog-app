import React, { useCallback, useEffect, useState } from "react";

import { useNavigationPost } from '@/hooks/useNavigationPost'
import imageArticle from "@/assets/article-img.jpg";
import { Button, Articles } from "@/components";
import { Post as PostInterface } from "@/types/Post";
import * as S from "./styles";

const postsMock = [
	{
		id: 1,
		title: "Big company announcement1",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis risus ac mi pulvinar semper id viverra sem.",
		imgPostUrl: imageArticle,
	},
	{
		id: 2,
		title: "Big company announcement2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis risus ac mi pulvinar semper id viverra sem.",
		imgPostUrl: imageArticle,
	},
	{
		id: 3,
		title: "Showcase your thought provoking topics and ideas",
		description:
			"L0rem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis risus ac mi pulvinar semper id viverra sem.",
		imgPostUrl: imageArticle,
	},
];

const Home: React.FC = (): React.ReactElement => {
	const [posts, setPosts] = useState<PostInterface[]>([]);
	const [hightLightPost, setHightLightPost] = useState<PostInterface>();
	const { goToPost } = useNavigationPost();

	useEffect((): void => {
		mountPosts();
	}, []);

	const mountPosts = useCallback(() => {
		const lastHilight = { ...postsMock.at(-1)! };
		setHightLightPost(lastHilight);
		const postsWithoutHightLight = postsMock.filter(post => post.id !== lastHilight.id);
		setPosts([...postsWithoutHightLight]);
	}, []);

	return (
		<S.Container>
			<S.PrimarySection>
				{hightLightPost && (
					<S.PrimaryArticle>
						<S.PrimaryArticleContent>
							<S.TitlePrimaryArticle>
								{hightLightPost.title}
							</S.TitlePrimaryArticle>
							<S.DescriptionPrimary>
							{hightLightPost.description}
							</S.DescriptionPrimary>
							<Button label="Read more" onClick={():void => goToPost(hightLightPost)}/>
						</S.PrimaryArticleContent>
						<S.ImagePrimary src={imageArticle} />
					</S.PrimaryArticle>
				)}
			</S.PrimarySection>
			<S.SecondarySection>
				<S.CategoriesSection>
					<S.CategoriesText>Categories</S.CategoriesText>
					<S.CategoryButton>Marketing</S.CategoryButton>
					<S.CategoryButton>Design</S.CategoryButton>
					<S.CategoryButton>Engineering</S.CategoryButton>
				</S.CategoriesSection>
				<Articles posts={posts} />
				<S.LoadMoreButton>Load more</S.LoadMoreButton>
			</S.SecondarySection>
			<S.Footer>
				<S.TextFooter>Copyright 2022. All Rights Reserved.</S.TextFooter>
			</S.Footer>
		</S.Container>
	);
};

export default Home;

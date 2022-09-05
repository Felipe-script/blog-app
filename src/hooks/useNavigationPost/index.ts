import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { PRIVATE_PATHS } from '@/enums/routes';
import { Post } from "@/types/Post";

export const useNavigationPost = () =>{
	const navigate = useNavigate();

	const goToPost = useCallback(
		(post: Post) => {
			navigate(`${PRIVATE_PATHS.POSTS}/${post.id}`, {
				state: {
					id: post.id,
					imgPostUrl: post.imgPostUrl,
					title: post.title,
					description: post.description,
				},
			});
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);
	return { goToPost };
};
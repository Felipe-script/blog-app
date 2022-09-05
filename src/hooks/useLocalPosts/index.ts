import {  useCallback } from 'react';
import { Post } from "@/types/Post";

type useLocalPostsType = {
	getLocalPosts: () => Post[] | undefined,
};

export const useLocalPosts = (): useLocalPostsType => {
	const getLocalPosts = useCallback((): Post[] | undefined => {
		const postResponse = localStorage.getItem('posts');
		if (!postResponse) return;
		const postsList = JSON.parse(postResponse)
		return postsList;
	}, []);

	return { getLocalPosts };
};
import { createPostWithImage, createPost, getAllPostsByEmail } from "@/app/services/api";
import { PostDataImageProps, PostDataProps } from "@/utils/postTypes";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useCreatePost = () => {
    const queryClient = useQueryClient();

    return useMutation((data: PostDataProps) => createPost(data), {
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
        },
    
    });
};

export const useCreatePostWithImage = () => {
    const queryClient = useQueryClient();

    return useMutation((data: PostDataImageProps) => createPostWithImage(data), {
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
        },
    
    });
};

export const useGetAllPostsByEmail = (email: string) => {
    return useQuery(["posts", email], () => getAllPostsByEmail(email));
};

// Path: src/hooks/useAuth.ts
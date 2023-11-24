"use client";
import { useGetAllPostsByEmail } from "@/hooks/usePost";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, use, useEffect } from "react";


const PostList = () => {
    const authStore = useAuthStore();
    const router = useRouter();
    const { data, isLoading, error } = useGetAllPostsByEmail(authStore.user?.email)

    // useEffect(() => {
    //     if (!authStore.user) {
    //         router.push("/loginform");
    //     }
    // }, [authStore.user]);

    return (
        <section className="p-24 flex flex-col justify-center">
            <h1>Your Posts</h1>
            {
                isLoading ? (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <div>
                        {
                            data?.map((post: { username: Key | null | undefined; post: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
                                <div key={post.username}>
                                    <h1>{post.post}</h1>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </section>
    )
};

export default PostList;

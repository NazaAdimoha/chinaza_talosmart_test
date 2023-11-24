"use client";
import { useCreatePost, useCreatePostWithImage } from "@/hooks/usePost";
import { useAuthStore } from "@/stores/authStore";
import { postSchema } from "@/utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Toast, { postToast } from "../toast/page";

const PostForm = () => {
  const authStore = useAuthStore();
  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(postSchema),
  });
  const createPostMutation = useCreatePost();
  const createPostImageMutation = useCreatePostWithImage();

  const onSubmit = async (data: any) => {
    try {
      if (data.image[0]) {
        await createPostImageMutation.mutateAsync({
          username: authStore.user?.username,
          base64str: data.image[0].base64,
          post: data.post,
        });
        postToast({
          message: "Post Created With Image Successfully" || data.message,
          action: "success",
        });
      } else {
        await createPostMutation.mutateAsync({
          username: authStore.user?.username,
          post: data.post,
        });
        postToast({
          message: "Post Created" || data.message,
          action: "success",
        });
      }
      //reset the fields after successful submission 
        setValue("post", "");
    } catch (error: any) {
      postToast({
        message: error.message || "Post Creation Failed",
        action: "error",
      });
      throw new Error(error.message);
    }
  };

  return (
    <section className="p-24 flex flex-col justify-center">
      <h1>Welcome, {
        authStore.user?.username
        }</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="post"
            className="block text-sm font-medium text-gray-700"
          >
            Post
          </label>
          <div className="mt-1">
            <textarea
              rows={3}
              className="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md place-holder-gray-400 place-content-center"
              placeholder="Post"
              {...register("post")}
            />
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="post"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <div className="mt-1">
            <input
              type="file"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Image"
              {...register("image")}
            />
          </div>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500"
          >
            Post
          </button>
        </div>
      </form>
      <Toast></Toast>
    </section>
  );
};

export default PostForm;

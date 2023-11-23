import { LoginDataProps, RegisterDataProps } from "@/utils/authTypes";
import { PostDataImageProps, PostDataProps } from "@/utils/postTypes";
import axios from "axios";

//create API services
const API_BASE_URL = "https://assignment-api-spxd.onrender.com/api/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//login endpoint
export const login = async (data: LoginDataProps) => {
    const response = await api.post("login", data);
    return response;
}

//register endpoint
export const register = async (data: RegisterDataProps) => {
    const response = await api.post("register", data);
    return response;
}

//create post endpoint
export const createPost = async (data: PostDataProps) => {
    const response = await api.post("posts", data);
    return response;
}

//create post with image endpoint
export const createPostWithImage = async (data: PostDataImageProps) => {
    const response = await api.post("createpost", data);
    return response;
}

//get all posts by email endpoint
export const getAllPostsByEmail = async (email: string) => {
    const response = await api.get(`posts/${email}`);
    return response.data;
}

export default api;
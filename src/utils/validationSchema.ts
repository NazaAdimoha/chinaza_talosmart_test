import * as Yup from 'yup';

export const loginSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export const registerSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

export const postSchema = Yup.object({
    post: Yup.string().required('Post Content is required'),
    username: Yup.string().required('Username is required'),
    image: Yup.mixed().required('Image is required'),
});
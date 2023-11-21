import { useAuthStore } from "@/stores/authStore";
import { LoginDataProps, RegisterDataProps } from "@/utils/authTypes";
import { useQueryClient } from "react-query";
import { login as ApiLogin, register as ApiRegister } from "@/app/services/api";


export const useAuth = () => {
    const queryClient = useQueryClient();
    const authStore = useAuthStore();

    const login = async (data: LoginDataProps) => {
        try {
            const res = await ApiLogin(data);
            //update the store if the login is successful
            if (res.status === 200) {
                authStore.login(res);
                localStorage.setItem("user", JSON.stringify(res));
                //store user data in reactquery cache
                queryClient.setQueryData("user", res);
                queryClient.invalidateQueries("posts");
            } else {
                throw new Error(res.message);
            }
        } catch (error) {
            console.error("Login failed", error);
            throw error;
        }
    };

    const register = async (data: RegisterDataProps) => {
        //register user
        try {
            const res = await ApiRegister(data);
            //update the store if the login is successful
            if (res.status === 200) {
                authStore.login(res);
                localStorage.setItem("user", JSON.stringify(res));
                //store user data in reactquery cache
                queryClient.setQueryData("user", res);
                queryClient.invalidateQueries("posts");
            } else {
                throw new Error(res.message);
            }
        } catch (error) {
            console.error("Registration failed", error);
            throw error;
        }
    };

};
import { useAuthStore } from "@/stores/authStore";
import { LoginDataProps, RegisterDataProps } from "@/utils/authTypes";
import { useQueryClient } from "react-query";
import { login as ApiLogin, register as ApiRegister } from "@/app/services/api";
import { postToast } from "@/app/components/toast/page";
import { useRouter } from "next/navigation";


export const useAuth = () => {
    const queryClient = useQueryClient();
    const authStore = useAuthStore();
    const router = useRouter();

    const login = async (data: LoginDataProps) => {
        try {
            const res = await ApiLogin(data);
            console.log("colo", res?.status);
            //update the store if the login is successful
            if (res.data?.message === "Login Successful") {
                // console.log("colos", res.data.error);
                authStore.login(res?.data);
                localStorage.setItem("user", JSON.stringify(res));
                postToast({ message: "Login successfully" || res.data?.message, action: "success" })
            

                //store user data in reactquery cache
                queryClient.setQueryData("user", res);
                queryClient.invalidateQueries("posts");
                
            } else {
                throw new Error(
                    res.data?.message || res.data?.error || res.data?.message
                );
            }
        } catch (error: any) {
            console.error("Login failed", error.message);
            throw error;
        } 
    };

    const registerUser = async (data: RegisterDataProps) => {
        //register user
        try {
            const res = await ApiRegister(data);
            //update the store if the login is successful
            if (res?.data?.message === "Registration Successful") {
                authStore.login(res?.data);
                localStorage.setItem("user", JSON.stringify(res));
                postToast({ message: "Registration successfully" || res.data?.message, action: "success" })
                //store user data in reactquery cache
                queryClient.setQueryData("user", res);
                queryClient.invalidateQueries("posts");
            } else {
                throw new Error(res?.data?.message);
            }
        } catch (error) {
            console.error("Registration failed", error);
            throw error;
        }
    };

    const logout = () => {
        authStore.logout();
        localStorage.removeItem("user");
        queryClient.invalidateQueries("posts");
    };

    return { login, registerUser, logout };

};
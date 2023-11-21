import { login as ApiLogin  } from "@/app/services/api";
import { LoginDataProps } from "@/utils/authTypes";
import { useQueryClient } from "react-query";
import { create } from "zustand";

// Authstate interface
interface Authstate {
    isLoggedIn: boolean;
    user: any;
    login: (data: LoginDataProps) => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<Authstate>((set) => {
    const queryClient = useQueryClient();

    return {
        isLoggedIn: false,
        user: null,
        login: async (data) => {
            const response = await queryClient.fetchQuery("login", () => ApiLogin(data));
            const result = response as any;

            //update the store if the login is successful
            if (result.status === 200) {
                set({ isLoggedIn: true, user: result });
                localStorage.setItem("user", JSON.stringify(result));

                //store user data in reactquery cache
                queryClient.setQueryData("user", result);
                queryClient.invalidateQueries("posts");
            } else {
                throw new Error(result.message);
            }
        },
        logout: () => {
            set({ isLoggedIn: false, user: null });
            localStorage.removeItem("user");
            queryClient.invalidateQueries("posts");
        },
    }
});
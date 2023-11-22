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
// const queryClient = useQueryClient();

export const useAuthStore = create<Authstate>((set) => {

    return {
        isLoggedIn: false,
        user: null,
        login: async (data) => {
            const response = await ApiLogin(data);
            const result = response as any;

            //update the store if the login is successful
            if (result.status === 200) {
                set({ isLoggedIn: true, user: result });
                localStorage.setItem("user", JSON.stringify(result));

                //store user data in reactquery cache

            } else {
                throw new Error(result.message);
            }
        },
        logout: () => {
            set({ isLoggedIn: false, user: null });
            localStorage.removeItem("user");
            // queryClient.invalidateQueries("posts");
        },
    }
});
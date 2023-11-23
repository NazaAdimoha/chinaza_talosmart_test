"use client";
import Image from "next/image";
import RegisterImg from "../../../public/frenzy.jpg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/utils/validationSchema";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import Toast, { postToast } from "../components/toast/page";
import { Oval } from "react-loader-spinner";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(registerSchema),
  });

  const { registerUser } = useAuth();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
      try {
          await registerUser(data);
          postToast({ message: "Login Successful", action: "success" });
          return router.push('/loginform');
      } catch (error: any) {
          postToast({ message: error.message || "Login Failed", action: "error" });
      } finally {
          setIsLoading(false);
      }
  };
  return (
    <section className="bg-white">
      <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover rounded-md shadow-lg lg:block lg:w-2/3">
          <div className="flex items-center shadow-lg h-screen w-full ">
            <Image
              className="w-full h-screen object-cover rounded-md shadow-lg"
              src={RegisterImg}
              alt="social media image"
            />
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                {/* <Image className="w-auto h-7 sm:h-8" src={LoginImg} width={200} height={200} alt="logo" /> */}
              </div>

              <p className="mt-3 text-gray-500 ">
                Welcome to Talosmart
              </p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="adimohanaza@gmail.com"
                    {...register("username")}
                    className={`${errors && errors.username && 'border border-red-600 focus:border-red-600' } block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-100 rounded-lg  focus:border-blue-200 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-20`}
                  />
                                    {errors && errors.username && (<p className="text-red-500 text-sm">{errors.username.message}</p>)}
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600"
                    >
                      Password
                    </label>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <input
                    type="password"
                    placeholder="*******"
                    {...register("password")}
                    className={`${errors && errors.username && 'border border-red-600 focus:border-red-600'} block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:ring-blue-200 focus:outline-none focus:ring focus:ring-opacity-20`}
                  />
                                    {errors && errors.password && (<p className="text-red-500 text-sm">{errors.password.message}</p>)}
                </div>

                <div className="mt-6">
                  <button type="submit" disabled={isLoading} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-200 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  {
                        isLoading ? (
                            <Oval
                            ariaLabel="loading-indicator"
                            height={20}
                            width={20}
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                            color="#aa1713"
                            secondaryColor="white"
                            wrapperClass="oval-wrapper"
                            />
                        ) : (
                            "Sign up"
                        )
                    }
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <Link
                  href="/loginform"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign in
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toast></Toast>
    </section>
  );
};

export default RegisterForm;

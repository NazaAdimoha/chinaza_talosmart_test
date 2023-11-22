
import Image from "next/image";
import RegisterImg from "../../../public/frenzy.jpg";

export const RegisterForm = () => {
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
                Sign up to access your account
              </p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="adimohanaza@gmail.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-100 rounded-lg  focus:border-blue-200 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-20"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*******"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:ring-blue-200 focus:outline-none focus:ring focus:ring-opacity-20"
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-200 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign up
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <a
                  href="#"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign in
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

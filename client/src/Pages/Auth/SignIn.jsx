import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import login from "../../assets/logo/bg.png";
import "../../Styles/App.css"
import Services from '../../Api/Services'
import { adminApi, commonApi, contentDeveloperApi, developerApi } from "../../Api/axios";
import { useStates } from '../../useContext/UseStates'
export const SignIn = () => {
  const { user, setUser } = useStates();
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await Services.SignIn(formData)
      .then(async (res) => {
        console.log(res.data);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("uid", res.data.uid);
        localStorage.setItem("token", res.data.token);
        await Services.getUserById(res.data.uid).then((response) => {
          setUser(response.data);
        }).catch((error) => {
          console.log(error);
        })
        toast.custom((t) => (
          <div
            className={`bg-toastGreen text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
              } duration-300 ease-in-out`}>
            <div className="flex items-center gap-2 text-white">
              <span>
                <i className="fa-solid fa-circle-check"></i>
              </span>
              <div>
                <span className="">Login successfull!</span>
              </div>
            </div>
          </div>
        ));
        setTimeout(() => {
          if (res.data.role === "ADMIN") {
            adminApi.interceptors.request.use((config) => {
              config.headers.Authorization = "Bearer " + res.data.token;
              return config;
            })
            navigate("/adminDashboard");
          } else {
            if (res.data.role === "DEVELOPER") {
              developerApi.interceptors.request.use((config) => {
                config.headers.Authorization = "Bearer " + res.data.token;
                return config;
              })
            }
            else if (res.data.role === "CONTENTDEVELOPER") {
              contentDeveloperApi.interceptors.request.use((config) => {
                config.headers.Authorization = "Bearer " + res.data.token;
                return config;
              })
            }
            navigate("/userDashboard");
          }
          if (res.data.role)
            commonApi.interceptors.request.use((config) => {
              config.headers.Authorization = "Bearer " + res.data.token;
              return config;
            })
          toast.remove();
        }, 3000);
      })
      .catch((err) => {
        console.log(err.message);
        toast.custom((t) => (
          <div
            className={`bg-[#ff5e5b] text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
              } duration-300 ease-in-out`}>
            <div className="flex items-center gap-2 text-white">
              <span>
                <i className="fa-solid text-xl fa-circle-xmark"></i>
              </span>
              <div>
                <span className="">Login failed!</span>
              </div>
            </div>
          </div>
        ));
      });
  };
  return (
    <>
      <main className=" h-screen">
        <section className="xl:bg-loginimage shadow  font-ubuntu fixed w-screen  h-screen bg-cover bg-no-repeat">
          <div className="flex  absolute right-0 lg:w-full   h-full">
            <div className="bg-green-500 lg:w-full   xl:w-[24em]   ">
              <div className=" flex h-full justify-center">
                <div className="xl:m-14  lg:w-full  justify-center xl:flex   xl:flex-col relative xl:right-36 gap-6  items-start">
                  <div className="flex lg:hidden  items-center gap-3 relative "></div>
                  <form onSubmit={handleLogin} className="bg-white z-10 shadow-2xl  rounded-md  lg:w-full xl:w-[28rem] h-full     p-8 ">
                    <div className="flex flex-col gap-7 ">
                      <div className="flex  w-24 my-3 items-center">
                        <img className="w-full" src={logo} />
                      </div>
                      <p className="text-xl">Login to your account</p>
                      <div className="flex flex-col gap-3">
                        <input
                          placeholder="Email address"

                          type="email"
                          name="email"
                          id="email"
                          onChange={handleInputchange}
                          className="p-4 border-lightgray1 border focus:outline-none focus:border focus:border-light-green-700 rounded-md"
                        />
                        <input
                          placeholder="Password"
                          type="password"
                          id="password"
                          name="password"
                          onChange={handleInputchange}
                          className="p-4 border-lightgray1 border focus:outline-none focus:border focus:border-light-green-700 rounded-md"
                        />
                      </div>
                      <div className="flex gap-3 text-lightgray items-center">
                        <input className="rounded-md" type="checkbox" />
                        <span>Remember me</span>
                      </div>
                      <button className="bg-green-500 p-3 text-white rounded-md">
                        Login
                      </button>
                      <div className="text-green-400 flex gap-2 items-center">
                        <span>
                          <i className="fa-solid text-sm fa-lock"></i>
                        </span>
                        <span>Forgot password?</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Toaster
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

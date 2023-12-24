import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import login from "../../assets/logo/bg.png";
import "../../Styles/App.css"
import Services from '../../Api/Services'
import { adminApi } from "../../Api/axios";

export const SignIn = () => {
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
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("uid", res.data.uid);
        localStorage.setItem("token", res.data.token);
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
          if (localStorage.getItem("role") === "ADMIN") {
            adminApi.interceptors.request.use((config) => {
              config.headers.Authorization = "Bearer " + res.data.token;
              return config;
            })
            navigate("/adminDashboard");
          } else {
            navigate("/userhome");
          }
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
      <main>
        <section className="flex lg:flex-col    xl:h-[39rem] font-poppins xl:mx-10 xl:my-5 rounded-xl shadow-xl items-start">
          <div className=" rounded-l-xl h-full signin   xl:w-[50em] lg:w-full">
            <div className="flex flex-col gap-12 items-center ">
              <figure className="mt-8 flex font-poppins flex-col items-center gap-7">
                <div className="flex  items-center text-3xl font-bold">
                  <img className="w-12" src={logo} alt="" />
                  <span className="font-extrabold">mypo</span>
                </div>

                <div className="font-bold font-poppins text-black text-3xl text-center w-[12em]  leading-[40px]">
                  <p>Discover Amypo with great build tools</p>
                </div>
              </figure>

              <figure>
                <img className="h-[23em] bg-cover" src={login} alt="" />
              </figure>
            </div>
          </div>
          <div className="xl:w-[48em] lg:p-5 h-full">
            <div className="flex flex-col py-32     font-poppins items-center ">
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-4xl">Welcome to Amypo</p>
                  <p className="flex items-center gap-2 ">
                    <span className="text-[#99a1b7]">New here?</span>
                    <button
                      onClick={() => navigate("/signup")}
                      className="text-[#20d489] font-bold">
                      Create Account
                    </button>
                  </p>
                </div>
                <form
                  onSubmit={handleLogin}
                  className="flex flex-col w-full gap-8">
                  <div className="flex flex-col gap-3 items-start">
                    <label className="font-bold " htmlFor="email">
                      Email
                    </label>
                    <input
                      className="bg-[#f9f9f9] focus:outline-none focus:border focus:border-brightgreen w-[24em] text-black px-3.5 py-2.5 text-lg fon rounded-lg "
                      type="text"
                      name="email"
                      id="email"
                      onChange={handleInputchange}
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start">
                    <label className="font-bold " htmlFor="email">
                      Password
                    </label>
                    <input
                      onChange={handleInputchange}
                      name="password"
                      id="password"
                      type="password"
                      className="bg-[#f9f9f9] focus:outline-none focus:border focus:border-brightgreen w-[24em] text-black px-3.5 py-2.5 text-lg rounded-lg "
                    />
                  </div>
                  <div>
                    <button type="submit" className="bg-[#2f8d46] p-3 font-bold text-white px-8 text-sm rounded-lg">
                      Sign In
                    </button>
                  </div>
                </form>
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

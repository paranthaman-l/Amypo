import React, { useEffect } from "react";
import { Routers } from "./Routers/Routers";
import { adminApi, commonApi, contentDeveloperApi, developerApi } from "./Api/axios";
import { useStates } from "./useContext/UseStates";
import Services from "./Api/Services";

const App = () => {
  const { setUser } = useStates();
  useEffect(() => {
    if (localStorage.getItem("role") === "ADMIN") {
      adminApi.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + localStorage.getItem("token");
        return config;
      })
    }
    else if (localStorage.getItem("role") === "DEVELOPER") {
      developerApi.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + localStorage.getItem("token");
        return config;
      })
    }
    else if (localStorage.getItem("role") === "CONTENTDEVELOPER") {
      contentDeveloperApi.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + localStorage.getItem("token");
        return config;
      })
    }
    else if (localStorage.getItem("role") === "TRAINER") {
      contentDeveloperApi.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + localStorage.getItem("token");
        return config;
      })
    }
    else if (localStorage.getItem("role") === "BDM") {
      contentDeveloperApi.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + localStorage.getItem("token");
        return config;
      })
    }
    if (localStorage.getItem("role"))
      commonApi.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + localStorage.getItem("token");
        return config;
      })
    if (localStorage.getItem("uid")) {
      Services.getUserById(localStorage.getItem("uid")).then((response) => {
        setUser(response.data);
      }).catch((error) => {
        console.log(error);
      })
    }
  }, [])

  return (
    <>
      <Routers />
    </>
  );
};

export default App;

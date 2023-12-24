import React, { useEffect } from "react";
import { Routers } from "./Routers/Routers";
import { adminApi } from "./Api/axios";

const App = () => {
  useEffect(() => {
    if (localStorage.getItem("role") === "ADMIN") {
      adminApi.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + localStorage.getItem("token");
        return config;
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

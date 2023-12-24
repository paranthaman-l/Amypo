/* eslint-disable no-unused-vars */
import {adminApi, authApi} from './axios'
class Services{
    SignIn(signIn){
        return authApi.post("/login",signIn);
    }

    AddEmployee(employee){
        return adminApi.post("/register",employee);
    }

    getEmployees(){
        return adminApi.get("/getEmployees")
    }

    EditEmployee(user){
        const {authorities,...data} = user;
        return adminApi.put("/updateUser",data,{params:{id:user?.eid}});
    }
}

export default new Services();
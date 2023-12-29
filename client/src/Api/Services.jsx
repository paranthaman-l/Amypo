/* eslint-disable no-unused-vars */
import {adminApi, authApi, commonApi} from './axios'
class Services{
    SignIn(signIn){
        return authApi.post("/login",signIn);
    }

    AddEmployee(employee){
        return adminApi.post("/register",employee);
    }
    
    getUserById(uid){
        return authApi.get("/getUserById",{params:{uid}});
    }
    getEmployees(){
        return adminApi.get("/getEmployees")
    }
    
    EditEmployee(user){
        const {authorities,...data} = user;
        return adminApi.put("/updateUser",data,{params:{id:user?.eid}});
    }
    
    getPendingLeaves(){
        return adminApi.get("/getPendingLeaves");
    }
    ApplyLeave(leave){
        return commonApi.post("/postleave",leave,{params:{eid:localStorage.getItem("uid")}});
    }
    ApproveLeave(lid){
        return adminApi.put("/approveLeave",{},{params:{lid}})
    }
    declineLeave(lid){
        return adminApi.put("/declineLeave",{},{params:{lid}})
    }

    getDataByStatus(status){
        return adminApi.get("/getleavebystatus",{params:{status}})
    }

    deleteEmployee(eid){
        return adminApi.delete("/deleteUser",{params:{eid}});
    }
    getEmployeesByRole(role){
        return adminApi.get("/getEmployeesByRole",{params:{role}})
    }

    getDataByStatusInUser(status){
        return commonApi.get("/getDataByStatusInUser",{params:{status,eid:localStorage.getItem("uid")}})
    }

    UpdateLeave(leave){
        return commonApi.put("/editleave",leave,{params:{lid:leave?.lid}});
    }

    deleteLeave(lid){
        return commonApi.delete("/deleteleave",{params:{lid}});
    }

    getTodayAttendance(){
        return commonApi.get("/getTodayAttendance"); 
    }

    markAttendance(attendance){
        return commonApi.post("/markAttendance",attendance);
    }

    getDayAttendance(date){
        return commonApi.get("/getDayAttendance",{params:{date}});
    }
    makeAttendance(date){
        return commonApi.post("/makeAttendance",{},{params:{date}});
    }
    getDataByDateAndPresent(date,isPresent){
        return commonApi.get("/getDataByDateAndPresent",{params:{date,isPresent}});
    }
    getReport(startDate,endDate){
        return commonApi.get("/getReportByDate",{params:{startDate,endDate}});
    }
}

export default new Services();
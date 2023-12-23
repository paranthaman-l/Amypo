import {authApi} from './axios'
class Services{
    SignIn(signIn){
        return authApi.post("/login",signIn);
    }
}

export default new Services();
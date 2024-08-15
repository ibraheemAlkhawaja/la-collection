import { PublicAxios } from "./AxiosHandler"

class SignInService {
    static endPoint ="login"
    static post(body){
        return PublicAxios.post(`${SignInService.endPoint}`,body)
    }
}
export default SignInService
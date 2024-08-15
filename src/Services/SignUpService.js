import { PublicAxios } from "./AxiosHandler"

class SignUpService {
    static endPoint = "/signup"
    static post(body){
        return PublicAxios.post(`${SignUpService.endPoint}`,body)
    }
}
export default SignUpService












import axios from "axios";
import { CreateAccountDto } from "../interfaces/auth/create-account-dto";
import { baseUrl } from "../environment";
import { AuthenticateDto } from "../interfaces/auth/authenticate-dto";

const headers = {
    'Content-Type': 'application/json'
}
export const newAccountRequests = {

    create : (newAccount : CreateAccountDto) : Promise<boolean> => {
        try{
            var body = JSON.stringify(newAccount)
            var response = axios.post<any>(`${baseUrl}/Account/create`, body, {headers}).then(
                res => {
                    console.log(res.data)
                    return res.data.data
                }
            )

            return response

        }
        catch(error){
            console.log(error)
            throw error
        }
    },

    authenticate : async (account: AuthenticateDto) : Promise<boolean> => {
        try{
            var body = JSON.stringify(account)
            var response = await axios.post<any>(`${baseUrl}/Account/authenticate`, body, {headers})

            return response.data.data
            

        }
        catch(error){
            console.log(error)
            throw error
        }
    }

}
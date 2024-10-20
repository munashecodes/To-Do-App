
import { CreateAccountDto } from "../interfaces/auth/create-account-dto";
import { AuthenticateDto } from "../interfaces/auth/authenticate-dto";
import { api } from "./auth-interceptor";
import { jwtDecode } from "jwt-decode";

const headers = {
  "Content-Type": "application/json",
};
export const authRequests = {
  create: (newAccount: CreateAccountDto): Promise<boolean> => {
    try {
      var body = JSON.stringify(newAccount);
      var response = api
        .post<any>(`/Account/create`, body, { headers })
        .then((res) => {
          console.log(res.data);
          return res.data.data;
        });

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  authenticate: async (account: AuthenticateDto): Promise<any> => {
    try {
      var body = JSON.stringify(account);
      var response = await api.post<any>(
        `/Account/authenticate`,
        body,
        { headers }
      );
      sessionStorage.setItem("account", JSON.stringify(response.data.data));
      sessionStorage.setItem("jwt-token", JSON.stringify(response.data.data.jwtToken))
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  validateToken: async (token : string): Promise<boolean> => {
    try {
        
        var response = await api.post<any>(
          `/Account/validateToken`,
          token,
          { headers }
        );
        sessionStorage.setItem("account", JSON.stringify(response.data.data));
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
  },

  getJwtToken: () => {
    const account = JSON.parse(sessionStorage.getItem('account')!)
    return account.jwtToken
  },

  jwtTokenDecoder: (token: string) => {
     try{
        const decoded = jwtDecode(token)

     const currentTime = Date.now() / 1000

     return decoded.exp! < currentTime
     }
     catch(error){
        console.error("Error decoding token", error)
        throw error
     }
  }
};

import axios from "axios"
import { baseUrl } from "../environment"
import { CreateTaskDto } from "../interfaces/create-task-dto"
import { GetTaskDto } from "../interfaces/get-task-dto"

const headers = {
    'Content-Type': 'application/json',
  } 

export const taskRequests = {

    createTask : async (task: CreateTaskDto) : Promise<CreateTaskDto> => {
          try{
            var body = JSON.stringify(task)
            var response = await axios.post<any>(`${baseUrl}/TaskItem/create`, body, {headers} )

            return response.data.data


            

          }
          catch(error){
            console.log(error)
            throw error
          }
    },

    getAll : async () : Promise<GetTaskDto[]> => {
      try{
        
        var response = await axios.get<any>(`${baseUrl}/TaskItem/getAll`, )

        return response.data.data


        

      }
      catch(error){
        console.log(error)
        throw error
      }
}


}
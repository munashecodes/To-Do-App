
import { CreateTaskDto } from "../interfaces/create-task-dto"
import { GetTaskDto } from "../interfaces/get-task-dto"
import { api } from "./auth-interceptor"

const headers = {
    'Content-Type': 'application/json',
  } 

export const taskRequests = {

    createTask : async (task: CreateTaskDto) : Promise<CreateTaskDto> => {
          try{
            var body = JSON.stringify(task)
            var response = await api.post<any>(`/TaskItem/create`, body, {headers} )

            return response.data.data


            

          }
          catch(error){
            console.log(error)
            throw error
          }
    },

    getAll : async () : Promise<GetTaskDto[]> => {
      try{
        
        var response = await api.get<any>(`/TaskItem/getAll`, )

        return response.data.data


        

      }
      catch(error){
        console.log(error)
        throw error
      }
}


}
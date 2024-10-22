import { useState, useEffect } from "react"
import styled from "styled-components"
import { taskRequests } from "../apiRequests/task-api"
import Task from "../components/Task"
import { GetTaskDto } from "../interfaces/get-task-dto"


const Today = () => {
    const [tasks, setTasks] = useState<GetTaskDto[]>([])
    const taskContent = tasks.map((task, index) => {
        return (
          <li key={index} className="mt-3">
            <Task task={task}/>
          </li>
        )
    })

    useEffect(() => {
        const retrieveTasks = async () => {
          var response = await taskRequests.getToday()
          setTasks(response)
    
          
        }
        retrieveTasks()
        console.log(tasks)
      }, [])

  return (
    <>
        <h1>Tasks</h1>
        <MainPage>
          
          <ul>
            {taskContent}
          </ul>
         

        </MainPage>
    </>
  )
}

const MainPage = styled.div`
width: 60vw;
margin-bottom: 3rem;
overflow-y: scroll;


`

export default Today
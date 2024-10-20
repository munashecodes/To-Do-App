import {useEffect, useState} from "react";
import SideMenu from "../components/SideMenu";
import styled from "styled-components";
import AddTaskModal from '../components/AddTaskModal'
import Task from "../components/Task";
import { GetTaskDto } from "../interfaces/get-task-dto";
import { taskRequests } from "../apiRequests/task-api";

interface Props{
    visibility: boolean
}
const Home = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<GetTaskDto[]>([])

  const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const retrieveTasks = async () => {
      var response = await taskRequests.getAll()
      setTasks(response)

      
    }
    retrieveTasks()
    console.log(tasks)
  }, [])

  const taskContent = tasks.map((task, index) => {
      return (
        <li key={index} className="mt-3">
          <Task task={task}/>
        </li>
      )
  })
  const toggleSidebar = () => {
    setIsVisible(prev => !prev);
  };
  
  return (
    <Container>
      <SideMenu isVisible={isVisible} addTask={openModal} toggleSidebar={toggleSidebar}/>
      
      <HomeWrap visibility={isVisible}>
      <h1>Tasks</h1>
        <Main>
          
          <ul>
            {taskContent}
          </ul>
         

        </Main>

      </HomeWrap>
      <AddTaskModal isOpen={isModalOpen} onClose={closeModal} />
      
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: auto;
  display: flex;
  flex: 1;
`
const HomeWrap = styled.div<Props>`
  width: 100%;
  height: 100%;
  flex-basis: 1;
  padding-top: 3rem;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  h1{
 font-size: 2rem;
 font-weight: 500;
}
`

const Main = styled.div`
width: 60vw;
margin-bottom: 3rem;
overflow-y: scroll;


`
export default Home;

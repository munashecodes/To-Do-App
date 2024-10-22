import { useState} from "react";
import SideMenu from "../components/SideMenu";
import styled from "styled-components";
import AddTaskModal from '../components/AddTaskModal'
import Main from "./Main";
import Today from "./Today";

interface Props{
    visibility: boolean
}
const Home = () => {

  const [currentPage, setCurrentPage] = useState('home')
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const changeMenu = (page : string) => {
    setCurrentPage(page)
  }
  const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    
  const [isVisible, setIsVisible] = useState(true);

  

  
  const toggleSidebar = () => {
    setIsVisible(prev => !prev);
  };
  
  return (
    <Container>
      <SideMenu isVisible={isVisible} page={changeMenu} addTask={openModal} toggleSidebar={toggleSidebar}/>
      
      <HomeWrap visibility={isVisible}>

        {
          currentPage === 'home' && <Main/>
        }
        {
          currentPage === 'today' && <Today/>
        }
      
           
      </HomeWrap>
      <AddTaskModal isOpen={isModalOpen} onClose={closeModal} />
      
    </Container>
  );
};

const Container = styled.div`
  max-height: 100vh;
  width: auto;
  display: flex;
  flex: 1;
  overflow: hidden;
  
`
const HomeWrap = styled.div<Props>`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  flex-direction:column;
  justify-content: center;
  
  align-items: center;
  h1{
    font-size: 2rem;
    font-weight: 500;
  }
`


export default Home;

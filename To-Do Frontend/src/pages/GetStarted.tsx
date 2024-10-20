
import styled from 'styled-components'
import img from '../assets/to-do.jpg'
import Button from '../components/Button'

interface Props {
    image: string;
  }
const GetStarted = () => {
  return (
    <Container image={img}>
    <h1>Welcome to the To-Do App!</h1>
    <p>This app is designed to help you stay organized and on top of your tasks and responsibilities.</p>
    
     <Button buttonText="Log In" />
    </Container>
  )
}

const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-repeat: no-repeat;

    h1 {
    font-size: 36px;
    margin-bottom: 20px;
    }
    
    p {
        font-size: 18px;
        margin-bottom: 40px;
        text-align: center;
    }
`

export default GetStarted
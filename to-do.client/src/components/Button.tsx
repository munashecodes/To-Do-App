import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const Button = (props: { buttonText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/login'); 
    };
    
  return (
    <Btn onClick={handleButtonClick}>

        <h3>{props.buttonText}</h3>

    </Btn>
  )
}

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 200px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(66, 109, 222);
  h3{
    color: white;
    font-size: 1rem;
  }

`

export default Button

import styled from 'styled-components'
import logo from '../../assets/favicon.png'
import img from '../../assets/lap.jpeg'
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useRef, useState } from 'react'
import { AuthenticateDto } from '../../interfaces/auth/authenticate-dto'
import { authRequests } from '../../apiRequests/auth-api'
import { Toast } from 'primereact/toast';

interface Props{
    image: string
}
const Login = () => {
  const [account , setAccount] = useState<AuthenticateDto>({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

    const show = () => {
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Success' });
    };

  

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setAccount({...account, [name]: value})
  }
    const handleButtonClick = () => {
        navigate('/home'); 
    };
  return (
    <Container>
      <Toast ref={toast} position="top-center"/>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="To Do"
            src={logo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={account.email}
                  onChange={handleInput}
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-transparent focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={account.password}
                  onChange={handleInput}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-transparent focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={async(event ) => {
                  event.preventDefault();
                  var res = await authRequests.authenticate(account)
                  if(res.isSuccess === true){
                     show()
                    handleButtonClick()
                  } else{
                    console.log("wrong password or email")

                  }
                    }}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </a>
          </p>
        </div>
      </div>
      <Wrap image={img}>

      </Wrap>
    </Container>
    
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
`

const Wrap = styled.div<Props>`
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 50vw;
  height: 100vh;
`


export default Login
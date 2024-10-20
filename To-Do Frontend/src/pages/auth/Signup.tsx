import { ChangeEvent, useState } from "react"
import { CreateAccountDto } from "../../interfaces/auth/create-account-dto"
import { authRequests } from "../../apiRequests/auth-api"


const Signup = () => {

    const [newAccount, setNewAccount] = useState<CreateAccountDto>({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setNewAccount({...newAccount, [name]: value})
    }
    
  return (
    
    <div className="lg:min-h-screen lg:grid-cols-12">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl mx-auto">
                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Sign Up
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                Create your account to get started.
                </p>

                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    First Name
                    </label>

                    <input
                        type="text"
                        id="FirstName"
                        onChange={handleInput}
                        value={newAccount.firstName}
                        name="firstName"
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-transparent focus:outline-none sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                    </label>

                    <input
                    type="text"
                    id="LastName"
                    value={newAccount.lastName}
                    onChange={handleInput}
                    name="lastName"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-transparent focus:outline-none sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                    <input
                    type="email"
                    id="Email"
                    value={newAccount.email}
                    onChange={handleInput}
                    name="email"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-transparent focus:outline-none sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                    <input
                    type="password"
                    id="Password"
                    value={newAccount.password}
                    onChange={handleInput}
                    name="password"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-transparent focus:outline-none sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                    Password Confirmation
                    </label>

                    <input
                    type="password"
                    id="PasswordConfirmation"
                    value={newAccount.confirmPassword}
                    onChange={handleInput}
                    name="confirmPassword"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-transparent focus:outline-none sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="col-span-6">
                    <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                        I want to receive emails about updates and company announcements.
                    </span>
                    </label>
                </div>

                <div className="col-span-6">
                    <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                    and
                    <a href="#" className="text-gray-700 underline"> privacy policy </a>.
                    </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                    onClick={async (event) => {event.preventDefault();await authRequests.create(newAccount)}}
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                    Create an account
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="/login" className="text-gray-700 underline">Log in</a>.
                    </p>
                </div>
                </form>
            </div>
        </main>
    </div>
    
  

  )
}

export default Signup
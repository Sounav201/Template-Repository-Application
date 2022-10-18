import React, { useContext, useState } from 'react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import AppContext from '../AppContext';


const Login = () => {
  const {user,setuser} = useContext(AppContext)
  
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [roleSelected, setRoleSelected] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    console.log(roleSelected)
    if (email.length == 0)
      return;

    if (password.length == 0)
      return;

    if (roleSelected == 0)
      return;
    if (email && password && roleSelected) {
      fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, roleID: roleSelected })
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'Login Successful') {
            localStorage.setItem('token', data.token)
            console.log("User role logged in ", data.role);
            localStorage.setItem('role', data.role);
            setuser(data.role);
            router.push('/dashboard/home')
          } else {
            alert(data.message)
          }
        })
//Data token  eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNvdW5hdkBnbWFpbC5jb20iLCJyb2xlSUQiOiIxIiwiaWF0IjoxNjY1ODU0NzEyLCJleHAiOjE2Njg0NDY3MTJ9.2AfSpAC1A-5wCKYdg9ca4bPre77L4bJ---aBw9pDFX4

    }

    //router.push('/dashboard/home');

  }


  return (
    <div className='bg-slate-900 h-auto  '>
      <Head>
        <title>Template Repository Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-auto container px-12 sm:px-0 mx-auto">
        <div className="mx-auto  md:w-10/12 lg:w-6/12">
          <div className="m-auto  py-4 sm:p-12 xl:w-10/12">
            <div className="space-y-4">
              <a href="">
                <h2 className='text-center md:text-6xl text-4xl font-bold text-white'>Template Repository Application</h2>
              </a>

            </div>
            <div className="mt-12 rounded-3xl border border-gray-700 bg-gray-800/50 -mx-6 sm:-mx-10 p-8 sm:p-10">
              <div className=' mb-4 mx-auto '>
                <p className='md:text-4xl text-white text-center '>Sign in</p>
              </div>
              {/* <div className="grid gap-6 sm:grid-cols-2">
          <button
            className="h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 bg-gray-700 border-gray-600 hover:bg-gray-800 hover:border-gray-700"
          >
            <div className="flex items-center justify-center space-x-4">
              <img src="google.svg" className="w-5" alt="" />
              <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 text-white"
                >With Google</span
              >
            </div>
          </button>
          <button
            className="h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 bg-gray-700 border border-gray-600 hover:bg-gray-800 hover:border-gray-700"
          >
            <div className="flex items-center justify-center space-x-4 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              <span className="block w-max text-sm font-semibold tracking-wide text-white"
                >With Github</span
              >
            </div>
          </button>
        </div> */}
              {/* <div className='mt-4 mb-2 mx-auto'>
          <p className='text-center md:text-base text-white font-semibold'>Choose user role</p>
        </div> */}
              <form action="" onSubmit={handleSubmit} className="mt-10 space-y-8 text-white">

                <div className='mx-auto flex items-center gap-4 '>
                  <label>Choose user role</label>
                  <select className='focus:outline-none rounded-lg bg-slate-700 p-1 text-white ' required onChange={(e) => setRoleSelected(e.target.value)}>
                    <option value={0}>Choose your role</option>
                    <option value={1}>Executor</option>
                    <option value={2}>Creator</option>
                    <option value={3}>Legal Approver</option>
                    <option value={4}>Marketing Approver</option>
                    <option value={5}>Compliance Approver</option>
                    <option value={6}>Business Head Approver</option>
                  </select>
                </div>
                <div>
                  <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email or user name" className="w-full bg-transparent pb-3  border-b  placeholder-gray-300 border-gray-600 outline-none  invalid:border-red-400 transition" />
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Your password" className="w-full bg-transparent pb-3  border-b  placeholder-gray-300 border-gray-600 outline-none  invalid:border-red-400 transition" />
                  </div>
                  <button type="reset" className="-mr-3 w-max p-3">
                    <span className="text-sm tracking-wide text-sky-400">Forgot password ?</span>
                  </button>
                </div>

                <div>
                  <button type="submit"
                    className="w-full rounded-full bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                  >
                    <span className="text-base font-semibold text-gray-900 ">Login</span>
                  </button>
                  <button type="reset" className="-ml-3 w-max p-3" >
                    <span className="text-sm tracking-wide text-sky-400">Create new account</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="border-t pt-12 text-gray-500 border-gray-800">
              <div className="space-x-4 text-center">
                <span>&copy; Template Repository Application</span>
                <a href="#" className="text-sm  hover:text-gray-300">Contact</a>
                <a href="#" className="text-sm  hover:text-gray-300">Privacy & Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
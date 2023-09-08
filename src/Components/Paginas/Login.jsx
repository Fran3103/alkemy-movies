import React from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

const Login = () => {



   const history = useNavigate()


    

// funcion para validar el login
     const Submit = (e) =>{

     e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    if(email ==='' && password === ''){
        console.log('campos vacios')
        return
    }

   const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    if(email === '' || !validEmail.test(email)){
        console.log('email invalido')
        return
    }

    if(email !=='challenge@alkemy.org' || password !=='react'){
        console.log('los datos son incorrectos')
        return
    }

    // envio datos a la api y redirecciono al componente principal
    axios
        .post('http://challenge-react.alkemy.org', {email, password})
        .then(resp =>{
          
            const  token = resp.data.token
            localStorage.setItem('token', token)   
            history('/peliculas')
        })
        

     }

     
     



  return (
    <div className=' w-96 m-auto rounded-md mt-24 shadow-gray-300 shadow-sm flex justify-center items-center flex-col min-h-full p-16 pt-8 bg-slate-900 ' >
       
        <h1 className='text-5xl mt-6 mb-16'>Bienvenido </h1>
        <form onSubmit={Submit} className='flex flex-col justify-center gap-6 mb-10'>
            <label >
            <input type="text" name='email' placeholder='challenge@alkemy.org' className='p-2 rounded-sm w-72 text-center ' />
            </label>

            <label>
            <input type="password" name='password' placeholder='react' className='p-2 text-black text-center rounded-sm w-72' />
            </label> 

            <button type='submit' className=' rounded-lg bg-gray-200 p-3  text-red-800 text-xl hover:bg-slate-500  transition-all hover:shadow-neutral-900 hover:shadow-lg'>Ingresar</button>
        </form>
    </div>
  )
}

export default Login
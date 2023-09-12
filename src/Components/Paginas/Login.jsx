import React, { useState } from 'react'
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
        setValidacion(error1)
        return
    }

   const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    if(email === '' || !validEmail.test(email)){
        console.log('email invalido')
        setValidacion(error2)
        return
    }

    if(email !=='challenge@alkemy.org' || password !=='react'){
        console.log('los datos son incorrectos')
        setValidacion(error3)
        return
    }

    // envio datos a la api y redirecciono al componente principal
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTI1NDQ0MzMxNGFmM2UwNmUyN2RjYTVhMzUxODEyZSIsInN1YiI6IjY0Zjc1OTRjYThiMmNhMDExYjg5MGIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W3fDDKt9yNCOq94K6WtnHdoo6s0A-2aWB7UqJKF54k4'
        },
        email: email,
        password: password
      };
      
      fetch('https://api.themoviedb.org/3/authentication', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    axios
        .post('http://challenge-react.alkemy.org', {email, password})
        .then(resp =>{
          console.log(resp)
            const  token = resp.data.token
            localStorage.setItem('token', token)   
            history('/peliculas')
        })
        

     }

     const [validacion , setValidacion ] = useState()

     const error1 = 'Ingrese un email y contraseña'
     
     const error2= 'Ingrese un Email valido'
     const error3 = 'Los datos ingresados son incorrectos'
     
     

  return (
    <div className=' w-80 m-auto rounded-md mt-32 shadow-gray-300/10 shadow-lg flex justify-center items-center flex-col min-h-full  bg-slate-900 md:mt-16' >
       
        <h1 className='text-3xl mt-6 mb-8'>Bienvenido </h1>
        <form onSubmit={Submit} action='/pelicula' className='flex flex-col justify-center items-center gap-6 mb-10'>
            <label >
            <input type="text" name='email' placeholder='challenge@alkemy.org' className='p-2 rounded-sm w-64  text-center text-blue-800 ' />
            <p className='text-red-700 mt-2 text-center '>{validacion}</p>
            </label>

            <label>
            <input type="password" name='password' placeholder='react' className='p-2 text-black text-center rounded-sm w-64' />
            <p className='text-red-700 mt-2 text-center '>{validacion}</p>
            </label> 

            <button type='submit' className=' rounded-lg bg-gray-200 p-2  text-red-800 text-lg hover:bg-slate-500  transition-all hover:shadow-neutral-900 hover:shadow-lg'>Ingresar</button>
        </form>
    </div>
  )
}

export default Login
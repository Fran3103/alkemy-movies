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
            history('/lista')
        })
        

     }

     
     



  return (
    <div className=' max-w-full  flex justify-center items-center flex-col'>
       
        <h1>Bienvenido </h1>
        <form onSubmit={Submit}>
            <label ><p>Email</p>
            <input type="text" name='email' placeholder='challenge@alkemy.org' />
            </label>

            <label><p>Contraseña</p>
            <input type="password" name='password' placeholder='react' />
            </label> 

            <button type='submit'>Ingresar</button>
        </form>
    </div>
  )
}

export default Login
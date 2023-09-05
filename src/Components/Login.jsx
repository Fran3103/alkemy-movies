import React from 'react'
import axios from 'axios'

const Login = () => {


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

    axios
        .post('http://challenge-react.alkemy.org', {email, password})
        .then(resp =>{
            console.log(resp.data)
            const  token = resp.data.token
            localStorage.setItem('token', token)    
        })
        

     }




  return (
    <div>
        <h1>Bienvenido </h1>
        <form onSubmit={Submit}>
            <label ><p>Email</p>
            <input type="text" name='email' placeholder='Email' />
            </label>

            <label><p>Contraseña</p>
            <input type="password" name='password' placeholder='Contraseña' />
            </label> 

            <button type='submit'>Ingresar</button>
        </form>
    </div>
  )
}

export default Login
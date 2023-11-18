import { useState } from "react"
import './Formulario.jsx'
import './Formulario.css'



const Formulario = () => {
 
    const [ formState,setFormState] = useState ({
        userName:'',
        lastName:'',
        email: '',
        telefono:'',
        password: '',
        confPassword:''
    })

    //Desestructuramos el formState para tenerlo disponible:
    const{ userName,lastName,email,telefono,password,confPassword} = formState
    console.log(formState)

    //Recibimos o capturamos el evento aca:
    const onInputChange = ({target}) => {
        const {name,value} = target
        setFormState({...formState,[name]: value })
    }
    
    const onSubmit = (e) => {
       e.preventDefault()
       console.log(formState);
    }

  return (
    
    <div className='row my-5 justify-content-md-center'>
        <div className='col-md-5'>
            <h1>Registro</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">Nombre</label>
                    <input type="text" className="form-Control" name="userName" onChange={ onInputChange } value={userName} />
                </div>
                <div className='form-group'>
                    <label htmlFor="lastName">Apellido</label>
                    <input type='text'className='form-Control' name='lastName' onChange={ onInputChange } value={lastName} />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type='email' className='form-Control' name='email' onChange={ onInputChange } value={email} />
                </div>
                <div className='form-group'>
                    <label htmlFor="telefono">Teléfono</label>
                    <input type='number' className='form-Control' name='telefono' onChange={ onInputChange } value={telefono} />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type='password' className='form-Control' name='password' onChange={ onInputChange } value={password} />
                </div>
                <div className='form-group'>
                    <label htmlFor="confPassword">Confirmar Password</label>
                    <input type='password' className='form-Control' name='confPassword' onChange={ onInputChange } value={confPassword} />
                </div>
                <button type='submit' className="btn btn-primary" onClick={e=> e.preventDefault()}>Registrarme</button>
            </form>
        </div>

    </div>
  )
}

export default Formulario;


 


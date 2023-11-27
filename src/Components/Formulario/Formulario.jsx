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
    
    const [errors, setErrors] = useState({
        userName: false,
        lastName: false,
        email: false,
        telefono: false,
        password: false,
        confPassword: false,
      });
      
    //Desestructuramos el formState para tenerlo disponible:
    const{ userName,lastName,email,telefono,password,confPassword} = formState
    console.log(formState)

    //Recibimos o capturamos el evento aca:
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        let error = false;
      
        // Realizar validaciones aquí
        switch (name) {
          case 'userName':
          case 'lastName':
            // Validación para nombres
            error = value.length < 3; // Puedes personalizar tu propia validación
            break;
          case 'email':
            // Validación para el correo electrónico
            // Puedes utilizar expresiones regulares para una validación más avanzada
            error = !/^\S+@\S+\.\S+$/.test(value);
            break;
          case 'telefono':
            // Validación para el número de teléfono
            error = isNaN(value) || value.length !== 10; // Puedes personalizar tu propia validación
            break;
          case 'password':
          case 'confPassword':
            // Validación para contraseñas
            error = value.length < 8; // Puedes personalizar tu propia validación
            break;
          default:
            break;
        }
      
        setErrors({ ...errors, [name]: error });
        setFormState({ ...formState, [name]: value });
      };
    
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
                    {errors.userName && <div className="error">El nombre es obligatorio y debe tener al menos 3 caracteres.</div>}
                </div>
                <div className='form-group'>
                    <label htmlFor="lastName">Apellido</label>
                    <input type='text'className='form-Control' name='lastName' onChange={ onInputChange } value={lastName} />
                    {errors.lastName && <div className="error">El apellido es obligatorio y debe tener al menos 3 caracteres.</div>}
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type='email' className='form-Control' name='email' onChange={ onInputChange } value={email} />
                    {errors.email && <div className="error">Ingresa un correo electrónico válido.</div>}
                </div>
                <div className='form-group'>
                    <label htmlFor="telefono">Teléfono</label>
                    <input type='number' className='form-Control' name='telefono' onChange={ onInputChange } value={telefono} />
                    {errors.telefono && <div className="error">Ingresa un número de teléfono válido.</div>}
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type='password' className='form-Control' name='password' onChange={ onInputChange } value={password} />
                    {errors.password && <div className="error">La contraseña debe tener al menos 8 caracteres.</div>}
                </div>
                <div className='form-group'>
                    <label htmlFor="confPassword">Confirmar Password</label>
                    <input type='password' className='form-Control' name='confPassword' onChange={ onInputChange } value={confPassword} />
                    {errors.confPassword && <div className="error">Las contraseñas no coinciden.</div>}
                </div>
                <button type='submit' className="btn btn-primary" onClick={e=> e.preventDefault()}>Registrarme</button>
            </form>
        </div>

    </div>
  )
}

export default Formulario;


 


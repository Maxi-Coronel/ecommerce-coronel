import Button from '../../Button/Button';
import './FormCreate.css'
import Input from '../Input';

const FormCreate = ({ functional, modal }) => {
    
    const dates = (event) => {
        event.preventDefault()
        const name = document.querySelector('#name').value
        const surname = document.querySelector('#surname').value
        const mobile = document.querySelector('#mobile').value
        if (mobile.length !== 10) {
            return(
                modal({
                    title: "Error en celular",
                    content: "El número es incorrecto, recorda, el código de área sin 0 y el número sin 15",
                    isOpen: true
                })
            )
        }
        const mail = document.querySelector('#mail').value
        const mailCorroborate = document.querySelector('#mail2').value
        if (mail !== mailCorroborate) {
            return(
                modal({
                    title: "Error email",
                    content: "Los email no son iguales",
                    isOpen: true
                })
            )
        }
        const password = document.querySelector('#password').value
        
        const user = {
          name: name,
          surname: surname,
          mobile: mobile,
          mail: mail,
          password: password
        }
        functional(user)
      }
      
    return (
        <form onSubmit={dates} className='form'>
            <div className='data'>
                <div>
                    <Input name='Nombre:' type='text' id='name' placeholder='Ej: Maximiliano' />
                    <Input name='Apellido:' type='text' id='surname' placeholder='Ej: Coronel' />
                    <Input name='Celular:' type='number' id='mobile' placeholder='Sin 0 ni 15' />
                </div>
                <div>
                    <Input name='E-mail:' type='email' id='mail' placeholder='ejemplo@ejemplo.com' />
                    <Input name='Confirma e-mail:' type='email' id='mail2' placeholder='ejemplo@ejemplo.com' />
                    <Input name='Contraseña:' type='password' id='password' placeholder='Contraseña' />
                </div>
            </div>
            <Button content='Crear usuario' styles='button' />
        </form>
    );
};

export default FormCreate;
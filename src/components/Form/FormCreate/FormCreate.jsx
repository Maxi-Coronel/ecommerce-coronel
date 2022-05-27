import Button from '../../Button/Button';
import './FormCreate.css'
import Input from '../Input';

const FormCreate = ({ functional }) => {
    
    const dates = (event) => {
        event.preventDefault()
        const name = document.querySelector('#name').value
        const surname = document.querySelector('#surname').value
        const mobile = document.querySelector('#mobile').value
        if (mobile.length !== 10) {
            return alert('error en celular')
        }
        const mail = document.querySelector('#mail').value
        const mailCorroborate = document.querySelector('#mail2').value
        if (mail !== mailCorroborate) {
            return alert('Los E-mail no son iguales')
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
        console.log(user);
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
import Button from '../Button/Button';
import './Form.css'

const Form = ({functional}) => {
    
    const dates = (event) => {
        event.preventDefault()
        const name = document.querySelector('#name').value
        const surname = document.querySelector('#surname').value
        const dni = document.querySelector('#dni').value
        const mail = document.querySelector('#mail').value
        const password = document.querySelector('#password').value
        if (password.length < 8 || password.length > 16) {
            return alert('error en contraseña')
        }
        
        const card = document.querySelector('#card').value
        if (card.length !== 16) {
            return alert('error en N° tarjeta')
        }
        
        const user = {
          name: name,
          surname: surname,
          dni: dni,
          mail: mail,
          password: password,
          card: card,
        }
        functional(user)
      }
      
    return (
        <form onSubmit={dates} className='form'>
            <div className='data'>
                <div>
                    <label htmlFor="name">
                        <span>Nombre:</span><input type="text" id='name' required />
                    </label>
                    <label htmlFor="surname">
                        <span>Apellido:</span><input type="text" id='surname' required />
                    </label>
                    <label htmlFor="dni">
                        <span>DNI:</span><input type="number" id='dni' required />
                    </label>
                </div>
                <div>
                    <label htmlFor="mail">
                        <span>E-mail:</span><input type="email" id='mail' required />
                    </label>
                    <label htmlFor="password">
                        <span>Contraseña:</span><input type="password" id='password' required />
                    </label>
                    <label htmlFor="card">
                        <span>N° tarjeta:</span><input type="number" id='card' required />
                    </label>
                </div>
            </div>
            <Button content='Pagar' styles='button' />
        </form>
    );
};

export default Form;
import Button from '../Button/Button';
import './Form.css'

const Form = ({functional}) => {
    
    const dates = (event) => {
        event.preventDefault()
        const name = document.querySelector('#name').value
        const surname = document.querySelector('#surname').value
        const dni = document.querySelector('#dni').value
        const mail = document.querySelector('#mail').value
        const mailCorroborate = document.querySelector('#mail2').value
        if (mail !== mailCorroborate) {
            return alert('Los E-mail no son iguales')
        }
        const mobile = document.querySelector('#mobile').value
        if (mobile.length !== 10) {
            return alert('error en N° tarjeta')
        }
        
        const user = {
          name: name,
          surname: surname,
          dni: dni,
          mail: mail,
          mobile: mobile,
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
                    <label htmlFor="mail2">
                        <span>Corroborar:</span><input type="email" id='mail2' required />
                    </label>
                    <label htmlFor="mobile">
                        <span>Celular:</span><input type="number" id='mobile' required />
                    </label>
                </div>
            </div>
            <Button content='Pagar' styles='button' />
        </form>
    );
};

export default Form;
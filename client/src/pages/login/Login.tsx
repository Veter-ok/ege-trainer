import { useState } from 'react'
import Input from '../../ui/input/input'
import './login.scss'
import Button from '../../ui/button/button'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className="login-page">
			<form className="login-form">
				<div className="login-form__title">Войти</div>
				<div className="login-form__content">
					<Input 
						placeholder='Email'
						value={email}
						onChange={setEmail}
					/>
					<Input 
						placeholder='Пароль'
						value={password}
						onChange={setPassword}
					/>
				</div>
				<Button text="Войти"/>
			</form>
		</div>
	)
}

export default Login
import { FunctionComponent as FC } from "react"
import './button.scss'

interface IPropsButton {
	text: string
}

const Button:FC<IPropsButton> = ({text}) => {
	return (
		<button className="general-button">{text}</button>
	)
}

export default Button
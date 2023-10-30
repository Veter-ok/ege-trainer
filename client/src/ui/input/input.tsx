import './input.scss'
import { FunctionComponent as FC} from "react"

interface IPropsInput {
	placeholder: string
	value: string
	onChange(a: string): void
}

const Input:FC<IPropsInput> = ({placeholder, value, onChange}) => {
	return (
		<input 
			className="text-input"	
			placeholder={placeholder} 
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
	)
}

export default Input
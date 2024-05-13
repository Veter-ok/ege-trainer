import { FunctionComponent as FC } from "react"

interface IButton {
    text: string,
    onPress: () => void
    style?: string
}

export const Button:FC<IButton> = ({text, onPress, style}) => {
    return (
        <button onClick={onPress} className={`rounded-xl w-36 h-10 bg-light ${style}`}>
            <p>{text}</p>
        </button>
    )
}
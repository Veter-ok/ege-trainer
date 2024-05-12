import { FunctionComponent as FC } from "react"

interface IButton {
    text: string,
    onPress: () => void
}

export const Button:FC<IButton> = ({text, onPress}) => {
    return (
        <button onClick={onPress} className="rounded-xl w-24 h-6 bg-light">
            <p>{text}</p>
        </button>
    )
}
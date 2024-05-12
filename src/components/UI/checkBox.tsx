import { FunctionComponent as FC } from "react"


interface ICheckBoxProps {
    text: string,
    value: number,
    currentlyValue: number,
    onPress: (a: number) => void
}

const MultipleChoiceButton:FC<ICheckBoxProps> = ({text, value, currentlyValue, onPress}) => {
    return (
        <button 
            onClick={() => onPress(value)}
            className={`rounded-xl w-32 h-12 ${value === currentlyValue ? 'bg-light' : 'bg-secondary'}`}
        >
            <p>{text}</p>
        </button>
    )
}

export default MultipleChoiceButton
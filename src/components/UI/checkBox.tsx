import { FunctionComponent as FC } from "react"


interface ICheckBoxProps {
    text: string,
    value: number,
    currentlyValue: number,
    onPress: (a: number) => void
    style?: string
}

const MultipleChoiceButton:FC<ICheckBoxProps> = ({text, value, currentlyValue, onPress, style}) => {
    return (
        <button 
            onClick={() => onPress(value)}
            className={`px-2 py-2 rounded-xl w-[150px] h-10 ${style} ${value === currentlyValue ? 'bg-light' : 'bg-secondary'}`}
        >
            <p className="">{text}</p>
        </button>
    )
}

export default MultipleChoiceButton
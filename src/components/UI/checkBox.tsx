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
            className={`px-2 whitespace-nowrap rounded-xl w-[200px] h-[50px] ${style} ${value === currentlyValue ? 'bg-light' : 'bg-secondary'}`}
        >
            <p className="">{text}</p>
        </button>
    )
}

export default MultipleChoiceButton
import { FunctionComponent as FC, useEffect, useState } from "react"

interface IAnswerOptionsProps {
    word: IMissedLatter,
    isActive: boolean
    title: string
    onClick: (option: string) => void
}

const AnswerOptions:FC<IAnswerOptionsProps> = ({word, isActive, title, onClick}) => {
    const [backgroundColor, setBackgroundColor] = useState("bg-secondary")

    const onPress = () => {
        if (isActive){
            setBackgroundColor(word.answer === title ? "bg-green" : "bg-red")
            onClick(title)
        }
    }

    useEffect(() => {
        setBackgroundColor("bg-secondary")
    }, [word])

    return (
        <button onClick={() => onPress()} className={`rounded-xl w-40 h-16 ${backgroundColor}`}>
            <p className="text-4xl">{title}</p>
        </button>
    )
}

export default AnswerOptions
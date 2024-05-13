import { FunctionComponent as FC, useEffect, useState } from "react"

interface IAnswerOptionsProps {
    id: number,
    isActive: boolean,
    isCorrect: boolean,
    title: string
    onClick: (option: string) => void
}

const AnswerOptions:FC<IAnswerOptionsProps> = ({id, isActive, isCorrect, title, onClick}) => {
    const [backgroundColor, setBackgroundColor] = useState("bg-secondary")

    const onPress = () => {
        if (isActive){
            setBackgroundColor(isCorrect ? "bg-green" : "bg-red")
            onClick(title)
        }
    }

    useEffect(() => {
        setBackgroundColor("bg-secondary")
    }, [id])

    return (
        <button onClick={() => onPress()} className={`rounded-xl w-40 h-16 ${backgroundColor}`}>
            <p className="text-4xl">{title}</p>
        </button>
    )
}

export default AnswerOptions
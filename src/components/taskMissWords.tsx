import { FunctionComponent as FC, useEffect, useState } from "react"
import AnswerOptions from "./UI/answerOption"

interface IMissedLetterProps {
    task: IMissedLatter
}

const MissedLatter:FC<IMissedLetterProps> = ({task}) => {
    const [isCorrect, setIsCorrect] = useState(false)
    const [isActiveOption, setIsActiveOption] = useState(true)

    const checkAnswer = (option: string) => {
        setIsActiveOption(false)
        if (option === task.answer){
            setIsCorrect(true)
        }
        setIsCorrect(false)
    }

    useEffect(() => {
        setIsActiveOption(true)
    }, [task])

    return (
        <div className="w-full mx-auto">
            <p className="text-center text-5xl">{task.title}</p>
            <div className="flex justify-center gap-6 mt-7">
                <AnswerOptions id={task.id} isActive={isActiveOption} isCorrect={task.options[0] === task.answer} onClick={checkAnswer} title={task.options[0]}/>
                <AnswerOptions id={task.id} isActive={isActiveOption} isCorrect={task.options[1] === task.answer} onClick={checkAnswer} title={task.options[1]}/>
            </div>
        </div>
    )
}

export default MissedLatter
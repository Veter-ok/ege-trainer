import { FunctionComponent as FC, useState } from "react"
import { Button } from "./UI/button"
import { getRandomNumber } from "@/utils/random"
import { isTaskInArray } from "@/utils/taskUtils"
import TaskSetting from "./taskSetting"
import AnswerOptions from "./UI/answerOption"

interface IPropsMissedLatterTaskPage {
    wordsForTasks: IMissedLatter[]
}

const MissedLatterTaskPage:FC<IPropsMissedLatterTaskPage> = ({wordsForTasks}) => {
    const [tasks, setTasks] = useState<IMissedLatter[]>([])
    const [currentlyWord, setCurrentlyWord] = useState<IMissedLatter>({id: -1, title: "", task_id: -1, answer: "", options: [""]})
    const [indexOfWord, setIndexOfWord] = useState(0)

    const [numberofWords, SetNumberofWords] = useState(10)
    const [traningType, setTraningType] = useState(1)

    const [isTaskStart, setTaskStart] = useState(false)
    const [isShowTotalStat, setIsShowTotalStat] = useState(false)

    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [isActiveAnswer, setIsActiveAnswer] = useState(true) 

    const getNextTask = () => {
        setIsActiveAnswer(true)
        if (tasks.length > indexOfWord + 1){
            setIndexOfWord(prevValue => prevValue + 1)
            setCurrentlyWord(tasks[indexOfWord + 1])
        }else{
            setTasks([])
            setIndexOfWord(0)
            setIsShowTotalStat(true)
        }
    }

    const startTask = () => {
        let newTasks:IMissedLatter[] = []
        for (let i = 0; i < numberofWords; i++) {
            let randomIndex = getRandomNumber(0, wordsForTasks.length)
            while (isTaskInArray(wordsForTasks[randomIndex], newTasks)){
                randomIndex = getRandomNumber(0, wordsForTasks.length)
            }   
            newTasks.push(wordsForTasks[randomIndex])
        }
        setTasks(newTasks)
        setCurrentlyWord(newTasks[0])
        setTaskStart(true)
    }

    const endTask = () => {
        setIsShowTotalStat(false)
        setTaskStart(false)
    }

    const checkAnswer = (option: string) => {
        setIsActiveAnswer(false)
        if (option === currentlyWord.answer){
            setCorrectAnswers(prevValue => prevValue + 1)
        }
    }

    return (
        <div>
        {isTaskStart && !isShowTotalStat ? 
            <div className="w-3/4 mx-auto mt-20">
                <p className="text-center text-lg mb-3 sm:text-xl">{indexOfWord+1}/{tasks.length}</p>
                <div className="w-full mx-auto">
                    <p className="text-center text-3xl sm:text-5xl">{currentlyWord.title}</p>
                    <div className="flex justify-center gap-6 mt-7">
                        <AnswerOptions isActive={isActiveAnswer} word={currentlyWord} onClick={checkAnswer} title={currentlyWord.options[0]}/>
                        <AnswerOptions isActive={isActiveAnswer} word={currentlyWord} onClick={checkAnswer} title={currentlyWord.options[1]}/>
                    </div>
                </div>
                <div className="flex items-center mt-8"><Button text="Дальше" onPress={getNextTask} style="mx-auto"/></div>
            </div>
            :
            <>
                {isTaskStart && isShowTotalStat ?
                    <div className="w-3/4 mx-auto mt-10">
                        <p className="text-center text-xl mb-4">Статистика</p>
                        <p className="text-center">Правильные ответы: {correctAnswers}</p>
                        <p className="text-center">Неправильные ответы: {numberofWords - correctAnswers}</p>
                        <div className="flex items-center mt-8"><Button text="Закрыть" onPress={() => endTask()} style="mx-auto"/></div>
                    </div>
                    :
                    <TaskSetting 
                        numberofWords={numberofWords}
                        SetNumberofWords={SetNumberofWords}
                        traningType={traningType}
                        setTraningType={setTraningType}
                        startTask={startTask}
                    />
                }
            </>
        }
        </div>
    )
}

export default MissedLatterTaskPage
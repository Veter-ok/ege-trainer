import { FunctionComponent as FC, useState } from "react"
import { Button } from "./UI/button"
import { getRandomNumber } from "@/utils/random"
import { isTaskInArray } from "@/utils/taskUtils"
import TaskSetting from "./taskSetting"
import MissedLatter from "./taskMissWords"

interface IPropsMissedLatterTaskPage {
    wordsForTasks: IMissedLatter[]
}

const MissedLatterTaskPage:FC<IPropsMissedLatterTaskPage> = ({wordsForTasks}) => {
    const [tasks, setTasks] = useState<IMissedLatter[]>([])
    const [isTaskStart, setTaskStart] = useState(false)
    const [numberofWords, SetNumberofWords] = useState(10)
    const [indexOfTask, setIndexOfTask] = useState(0)
    const [traningType, setTraningType] = useState(1)
    

    const getNextTask = () => {
        if (tasks.length > indexOfTask + 1){
            setIndexOfTask(prevValue => prevValue + 1)
        }else{
            setTasks([])
            setIndexOfTask(0)
            setTaskStart(false)
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
        setTaskStart(true)
    }

    return (
        <div>
        {isTaskStart ? 
            <div className="w-1/2 mx-auto mt-20">
                <p className="text-center text-xl mb-5">{indexOfTask+1}/{tasks.length}</p>
                <MissedLatter task={tasks[indexOfTask]}/>
                <div className="flex items-center mt-8"><Button text="Дальше" onPress={getNextTask} style="mx-auto"/></div>
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
        </div>
    )
}

export default MissedLatterTaskPage
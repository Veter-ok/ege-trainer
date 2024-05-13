import {FunctionComponent as FC} from 'react'
import MultipleChoiceButton from './UI/checkBox'
import { Button } from './UI/button'

interface IPropsTaskSetting {
    numberofWords: number
    SetNumberofWords(value: number): void
    traningType: number,
    setTraningType(value: number): void
    startTask(): void
}

const TaskSetting:FC<IPropsTaskSetting> = ({numberofWords, SetNumberofWords, traningType, setTraningType, startTask}) => {
    return (
        <div className="w-1/2 mx-auto">
            <div className='mt-12'>
                <p className='text-center'>Количество слов</p>
                <div className='flex justify-center mt-3 gap-7'>
                    <MultipleChoiceButton text="10" value={10} currentlyValue={numberofWords} onPress={SetNumberofWords}/>
                    <MultipleChoiceButton text="20" value={20} currentlyValue={numberofWords} onPress={SetNumberofWords}/>
                    <MultipleChoiceButton text="50" value={50} currentlyValue={numberofWords} onPress={SetNumberofWords}/>
                </div>
            </div>
            <div className='mt-12'>
                <p className='text-center'>Вид тренировки</p>
                <div className='flex justify-center mt-3 gap-7'>  
                    <MultipleChoiceButton text="Новые слова" value={1} currentlyValue={traningType} onPress={setTraningType} style='w-36 h-16'/>
                    <MultipleChoiceButton text="Повторение + новые слова" value={2} currentlyValue={traningType} onPress={setTraningType} style='w-36 h-16'/>
                </div>
            </div>
            <div className='flex mt-12'>
                <Button text="Начать" onPress={startTask} style='mx-auto'/>
            </div>
        </div>
    )
}

export default TaskSetting
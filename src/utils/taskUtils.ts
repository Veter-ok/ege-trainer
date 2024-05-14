import { tasks_9_12 } from "@/app/data/task"

export const findTasksByID = (sumbjectid: number):IMissedLatter[] => {
    const newArray = []
    for(let i = 0; i < tasks_9_12.length; i++){
        if (tasks_9_12[i].task_id === sumbjectid){
            newArray.push(tasks_9_12[i])
        }
    }
    return newArray
}

export const isTaskInArray = (task:IMissedLatter, array:IMissedLatter[]):boolean => {
    for (let i = 0; i < array.length; i++){
        if (array[i].id == task.id){
            return true
        }
    }
    return false
}
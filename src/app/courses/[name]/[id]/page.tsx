'use client'
import { courses } from "@/app/data/courses";
import { tasks_9 } from "@/app/data/task9";
import MissedLatterTaskPage from "@/components/MissedLatterTaskPage";
import { findCourse } from "@/utils/coursesUtils";
import { useParams } from "next/navigation";


export default function Course() {
    const params = useParams()
    const task = findCourse(Number(params.id), courses)
    // const wordsForTasks = ...

    return (
        <div>
            <p>{task.title}</p>
            <MissedLatterTaskPage wordsForTasks={tasks_9}/>
        </div>
    );
}

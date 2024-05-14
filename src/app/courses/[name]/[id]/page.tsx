'use client'
import { courses } from "@/app/data/courses";
import MissedLatterTaskPage from "@/components/MissedLatterTaskPage";
import { findCourse } from "@/utils/coursesUtils";
import { findTasksByID } from "@/utils/taskUtils";
import { useParams } from "next/navigation";


export default function Course() {
    const params = useParams()
    const task = findCourse(Number(params.id), courses)
    const wordsForTasks = findTasksByID(Number(params.id))

    return (
        <div className="mt-16">
            <p className=" text-2xl text-center">{task.title}</p>
            <MissedLatterTaskPage wordsForTasks={wordsForTasks}/>
        </div>
    );
}

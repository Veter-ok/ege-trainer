'use client'
import { courses } from "@/app/data/courses";
import { findCourse } from "@/utils/coursesUtils";
import { useParams } from "next/navigation";


export default function Course() {
    const params = useParams()
    const task = findCourse(Number(params.id), courses)

    return (
        <div>
            <p>{task.title}</p>
        </div>
    );
}

import { FunctionComponent as FC } from "react"
import { ICourse } from "@/types/courses"
import { Button } from "./UI/button"
import Link from "next/link"

interface ICourseBlock {
    course: ICourse
}

const CourseBlock:FC<ICourseBlock> = ({course}) => {

    const click = () => {

    }

    return (
        <div className="inline-grid grid-cols-2 grid-rows-3 gap-3 mt-5 h-34 bg-secondary p-3">
            <p className="text-lg">{course.title}</p>
            <p className="text-lg row-span-3 bg-light">Icon</p>
            <p className="text-sm">{course.description}</p>
            <Link href={course.path} className="relative mt-auto rounded-xl w-24 h-6 bg-light text-center">открыть</Link>
        </div>
)}  

export default CourseBlock
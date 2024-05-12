"use client"
import MultipleChoiceButton from "@/components/UI/checkBox";
import { ICourse } from "@/types/courses";
import { useEffect, useState } from "react";
import { courses, subjects } from "../data/courses";
import CourseBlock from "@/components/courseBlock";


export default function AllCourses() {
    const [currentlySubject, setCurrentlySubject] = useState(0)
    const [currentlyCourses, setCurrentlyCourses] = useState<ICourse[]>([])

    useEffect(() => {
        const newCurrentlyCourses:ICourse[] = []
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].subject === currentlySubject){
                newCurrentlyCourses.push(courses[i])
            }
        }
        setCurrentlyCourses(newCurrentlyCourses)
    }, [currentlySubject])

  return (
    <div>
        <div className="flex justify-center h-full mt-5">
            {subjects.map((subject) => 
                <MultipleChoiceButton 
                    key={subject.id} 
                    text={subject.title} 
                    value={subject.id}
                    currentlyValue={currentlySubject}
                    onPress={setCurrentlySubject}
                />
            )}
        </div>
        <div className="grid grid-cols-4 gap-5 px-5 mt-10">
            {currentlyCourses.map((course) =>
               <CourseBlock key={course.id} course={course}/>
            )}
        </div>
    </div>
  );
}
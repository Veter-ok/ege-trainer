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
        <div className="w-5/6 overflow-y-auto flex flex-row justify-start gap-5 mt-5 mx-auto sm:justify-center">
                {subjects.map((subject) => 
                    <MultipleChoiceButton 
                        style="whitespace-nowrap"
                        key={subject.id} 
                        text={subject.title} 
                        value={subject.id}
                        currentlyValue={currentlySubject}
                        onPress={setCurrentlySubject}
                    />
                )}
        </div>
        <div className="grid grid-cols-2 gap-5 px-5 mt-10 md:grid-cols-3 lg:grid-cols-4">
            {currentlyCourses.map((course) =>
               <CourseBlock key={course.id} course={course}/>
            )}
        </div>
    </div>
  );
}

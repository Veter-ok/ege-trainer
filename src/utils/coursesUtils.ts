import { ICourse } from "@/types/courses";

export const findCourse = (id: number, courses: ICourse[]):ICourse => {
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].id === id) {
            return courses[i]
        }
    }
    return courses[0]
}
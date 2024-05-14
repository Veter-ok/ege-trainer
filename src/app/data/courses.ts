import { ICourse, ISubject } from "@/types/courses"

export const subjects:ISubject[] = [
    {
        id: 0,
        title: "Русс. язык",
        subtitle: "rus"
    },
    {
        id: 1,
        title: "Математика",
        subtitle: "math"
    },
    {
        id: 2,
        title: "Информатика",
        subtitle: "inf"
    },
]

export const courses:ICourse[] = [
    {
        id: 4,
        subject: 0,
        title: "Задание 4",
        description: "Ударения",
        path: "rus/task4"
    },
    {
        id: 9,
        subject: 0,
        title: "Задание 9",
        description: "Орфограммы в корне слова",
        path: "rus/task9",
    },
    {
        id: 10,
        subject: 0,
        title: "Задание 10",
        description: "Орфограммы в приставке",
        path: "rus/task10"
    },
    {
        id: 11,
        subject: 0,
        title: "Задание 11",
        description: "Орфограммы в суффиксе",
        path: "rus/task11"
    },
    {
        id: 12,
        subject: 0,
        title: "Задание 12",
        description: "Орфограммы в окончании",
        path: "rus/task12"
    },
    {
        id: 13,
        subject: 1,
        title: "Задание 5",
        description: "Уравнения",
        path: "math/task5"
    },
    {
        id: 14,
        subject: 2,
        title: "Задание 7",
        description: "...",
        path: "inf/task7"
    }
]
import { ICourse, ISubject } from "../../types/courses";

export const subjects:ISubject[] = [
    {
        id: 0,
        title: "Русс. язык"
    },
    {
        id: 1,
        title: "Математика"
    },
    {
        id: 2,
        title: "Информатика"
    },
]

export const courses:ICourse[] = [
    {
        id: 0,
        subject: 0,
        title: "Задание 4",
        description: "Ударения",
        path: "courses/rus/0"
    },
    {
        id: 1,
        subject: 0,
        title: "Задание 9",
        description: "Орфограммы в корне слова",
        path: "courses/rus/1",
    },
    {
        id: 2,
        subject: 0,
        title: "Задание 10",
        description: "Орфограммы в приставке",
        path: "courses/rus/2"
    },
    {
        id: 3,
        subject: 0,
        title: "Задание 11",
        description: "Орфограммы в суффиксе",
        path: "courses/rus/3"
    },
    {
        id: 4,
        subject: 0,
        title: "Задание 12",
        description: "Орфограммы в окончании",
        path: "courses/rus/4"
    },
    {
        id: 10,
        subject: 1,
        title: "Задание 5",
        description: "Уравнения",
        path: "courses/math/10"
    },
    {
        id: 20,
        subject: 2,
        title: "Задание 7",
        description: "...",
        path: "courses/inf/20"
    }
]
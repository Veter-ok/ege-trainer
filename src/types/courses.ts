export interface ISubject {
    id: number,
    title: string
    subtitle: string
}

export interface ICourse {
    id: number
    subject: number
    title: string
    description: string
    path: string
}
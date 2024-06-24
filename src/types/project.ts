

export type ProjectCardType = {
    id: number,
    title: string,
    description: string,
    image: string,
    category: string,
    timeSpan: string,
    technologies: {
        title: string,
        bgColor: string,
    }[]
}
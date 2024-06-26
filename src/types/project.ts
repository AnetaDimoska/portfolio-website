
export type Technology = {
    title: string;
    bgColor: string;
}

export type ProjectCardType = {
    id: number,
    title: string,
    description: string,
    image: string,
    category: string,
    timeSpan: string,
    technologies: Technology[]
}
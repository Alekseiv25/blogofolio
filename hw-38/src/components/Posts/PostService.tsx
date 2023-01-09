 export interface IPost {
    user: any 
    // Как сделать не эни
    id: number
    image: string
    text: string
    date: number
    lesson_num?: number
    title: string
    author?: number
}

export interface IRes {
    count: number
    results: IPost[]
}

const baseUrl = 'https://studapi.teachmeskills.by/blog/posts/?limit=10'

export const getAllPosts = () => {
    return (
        fetch(baseUrl)
            .then(response => response.json())
            .then(((response: IRes) => response.results)))

}
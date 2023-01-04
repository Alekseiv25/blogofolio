export interface IPost {
    id: number
    image: string
    text: string
    date: number
    lesson_num: number
    title: string
    author: number
}

export interface IRes {
    count: number
    results: IPost[]
}

export const getAllPosts = (limit: 10) => {
    return fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10')
        .then(response => response.json())
        .then((response: IRes) => response.results)

}
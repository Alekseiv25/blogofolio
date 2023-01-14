export interface IPost {
    id?: number
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


export const getAllPosts = (limit: number, offset: number) => {
    return fetch(
        'https://studapi.teachmeskills.by/blog/posts/'
        + `?limit=${limit}&offset=${offset}`
    )
        .then(response => response.json())
        .then(res => res.results)
}
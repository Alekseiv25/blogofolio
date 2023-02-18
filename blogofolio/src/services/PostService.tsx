export interface IPost {
    id: number
    image: string
    text: string
    date: number
    lesson_num?: number
    title: string
    author?: number
    likes: number
    dislikes: number
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
export const GetSearchPosts = (search: number | string) => {
    return fetch(
        'https://studapi.teachmeskills.by/blog/posts/'
        + `?search=${search}&limit=10` 
    )
        .then(response => response.json())
        .then(res => res.results)
}

export const getPostById = (id: number = 1) => {
    return fetch(
        'https://studapi.teachmeskills.by/blog/posts/'
        + `${id}`
    )
        .then(response => response.json())
        .then(res => res)
}

export const getPostsCount = async () => {
    const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/`);
    const res = await response.json();
    return res.count;
};



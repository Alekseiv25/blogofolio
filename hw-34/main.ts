// 1. 
interface Ifaculties {
    id: number
    faculty: FacultiesType
    subjects: SubjectsType[]
    countStudents: number
}

type FacultiesType = "History department" | "Department of Biology" | "Faculty of Mathematics" | "Faculty of Design"

type SubjectsType = "The World History" | "History of Rome" | "biology" | "chemistry" | "mathematics" | "geometry" | "trigonometry" | "ui" | "ux" | "graphic design"

const faculties: Ifaculties[] = [
    {
        id: 1,
        faculty: "History department",
        subjects: ["The World History", "History of Rome"],
        countStudents: 44
    },
    {
        id: 2,
        faculty: "Department of Biology",
        subjects: ["biology", "chemistry"],
        countStudents: 50
    },
    {
        id: 3,
        faculty: "Faculty of Mathematics",
        subjects: ["mathematics", "geometry", "trigonometry"],
        countStudents: 72
    },
    {
        id: 4,
        faculty: "Faculty of Design",
        subjects: ["ui", "ux", "graphic design"],
        countStudents: 37
    }
];

// 2.


interface IMovies {
    id: number
    title: TitleType
    year: number
    released: string
    runtime: string
    genre: GenreType[]
    director: DirectorType
    writer: string
    actors: ActorsType[]
    plot: string
    country: string
    poster: string
    imdbRating: number
    imdbVotes: number
    type: MovieType
    boxOffice: string
    production: string
}

type TitleType = "Black Widow" | "Harry Potter and the Deathly Hallows: Part 2"

type GenreType = "Action" | "Sci-Fi" | "Adventure" | "Drama" | "Fantasy"

type DirectorType = "Cate Shortland" | "David Yates"

type ActorsType = "Scarlett Johansson" | "Florence Pugh" | "David Harbour" | "Daniel Radcliffe" | "Emma Watson" | "Rupert Grint"

type MovieType = "movie" | "cartoon"

const movies: IMovies[] = [
    {
        id: 1,
        title: "Black Widow",
        year: 2021,
        released: "09 Jul 2021",
        runtime: "134 min",
        genre: ["Action", "Sci-Fi", "Adventure"],
        director: "Cate Shortland",
        writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
        actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
        plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        country: "United States",
        poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        imdbRating: 6.9,
        imdbVotes: 121932,
        type: "movie",
        boxOffice: "$138,027,361",
        production: "Marvel Studios",
    },
    {
        id: 2,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: 2011,
        released: "15 Jul 2011",
        runtime: "130 min",
        genre: ["Adventure", "Drama", "Fantasy"],
        director: "David Yates",
        writer: "Steve Kloves, J.K. Rowling",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        country: "United Kingdom, United States",
        poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        imdbRating: 8.1,
        imdbVotes: 790377,
        type: "movie",
        boxOffice: "$381,409,310",
        production: "Heyday Films, Moving Picture Company, Warner Bros.",
    },
];
interface IUsers  {
    name: string
    phone: string
    email: string
    animals?: AnimalsType[]
    cars?: CarsType[]
    hasChildren: boolean
    hasEducation: boolean
}

type CarsType = "bmw" | "audi"

type AnimalsType = "cat" | "dog"

const users: IUsers[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true

    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

//1
const usersName: string = users.map(users => users.name).join(', ')
console.log(usersName)

//2
const amountCars: number = (users.filter(users => users.cars).reduce((total, amount) => total + amount.cars!.length, 0))
console.log(amountCars)

// //3
function hasEducation(arr: IUsers[]): IUsers[] {
    return (arr.filter((users) => users.hasEducation))
}
console.log(hasEducation(users));

//4
function hasAnimal(arr: IUsers[]): IUsers[] {
    return (arr.filter((users) => users.animals))
}
console.log(hasAnimal(users));

//5
function carsName(arr: IUsers[]): string {
    return arr.filter((users) => users.cars).map((users) => users.cars).join(',')
}
console.log(carsName(users));
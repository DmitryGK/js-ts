type StudentType  = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type TechType = {
    id: number
    title: string
}

const student: StudentType = {
    id: 1,
    name: 'Dmitry',
    age: 32,
    isActive: true,
    address: {
        streetTitle: 'Gorodeckaya 13',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },{
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}

console.log(student.name)
console.log(student.address.streetTitle)
console.log(student.technologies[1].id)
console.log(student.technologies[2].title)



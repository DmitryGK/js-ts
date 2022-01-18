export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrey Ivanov', age: 33},
    {name: 'Alex Petrov', age: 25},
    {name: 'Ruslan Sparish', age: 50}
]


const transformator = (man: ManType) => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
        firstname: man.name.split(' ')[0],
        lastname: man.name.split(' ')[1],

})


const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstname: 'Andrey', lastname: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstname: 'Alex', lastname: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstname: 'Ruslan', lastname: 'Sparish'
    }
]

const devs2 = people.map(transformator)



const messages = people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome to incubator`)


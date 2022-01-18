import {ManType} from "./05_01";

let people: Array<ManType> = []

beforeEach( () => {
    people = [
        {name: 'Andrey Ivanov', age: 33},
        {name: 'Alex Petrov', age: 25},
        {name: 'Ruslan Sparish', age: 50}
    ]
})

test('should get array of greeting messages', () => {

    const messages = people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome to incubator`)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrey. Welcome to incubator')
    expect(messages[1]).toBe('Hello Alex. Welcome to incubator')
    expect(messages[2]).toBe('Hello Ruslan. Welcome to incubator')
})
import {ManType} from "./Destructuring";


let man: ManType
beforeEach(() => {
    man = {
        name: 'Dmitry',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Name street'
            }
        }
    }
})

test('should be corrected', () => {


    const {age, lessons} = man
    const {title} = man.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)

    expect(title).toBe('Name street')
})


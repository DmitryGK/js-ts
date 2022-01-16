import {doesStudentLivesInCity, makeStudentActive} from "../03/03";
import {addSkill} from "./03";
import {StudentType} from "../02/02";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: 'Dmitry',
        age: 32,
        isActive: false,
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
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)

})

test('does student lives in city', () => {

   let result1 = doesStudentLivesInCity(student, 'Moscow')
   let result2 = doesStudentLivesInCity(student, 'Minsk')

    expect(result1).toBe(false)
    expect(result2).toBe(true)

})
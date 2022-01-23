
 type ManType = {
    name: string
     age: number
     lessons: Array<{title:string}>
     address: {street:{title:string}}
}




let man: ManType
beforeEach( () => {
    man = {
        name: 'Dmitry',
        age: 32,
        lessons: [{title: '1'},{title: '2'}],
        address: {
            street: {
                title: 'Name street'
            }
        }
})

test('', () => {


    const{age, lessons} = man

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
})


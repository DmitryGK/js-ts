test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]

    const predicate = (age: number) => age > 90


    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses chipper then 160', () => {

    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]


    const chipPredicate = (course:CourseType) => course.price < 160


    const chipCourses = courses.filter(chipPredicate)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].price).toBe(110)
    expect(chipCourses[1].title).toBe('REACT')


})